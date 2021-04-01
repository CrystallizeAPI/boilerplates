const path = require(`path`)
const fs = require("fs")

/**
 * Get all the locales from the config and
 * populate each with the locale resources
 */
const getLocales = (function () {
  let locales

  return () => {
    if (locales) {
      return locales
    }

    const config = JSON.parse(
      fs.readFileSync(path.resolve("app.config.json"), "utf-8")
    )

    locales = config.locales.map((locale) => {
      const resourcesPath = `src/locales/${locale.appLanguage}.js`
      try {
        const resources = require(path.resolve(resourcesPath))
        return {
          ...locale,
          resources,
        }
      } catch (e) {
        throw new Error(`Cannot find locale resource (${resourcesPath})`)
      }
    })

    return locales
  }
})()

/**
 * give the root path the correct path e.g.: /en
 */
exports.onCreatePage = ({ page, actions }) => {
  const fixedPaths = ["/", "/search", "/404", "/account", "/my-account", "/checkout", "/confirmation"]
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)

  getLocales().map((locale) => {
    if (fixedPaths.includes(page.path.replace(/\/$/, ""))) {
      page.path = `/${locale.urlPrefix}${page.path}`
        .replace("//", "/")
        .replace(/\/$/, "")

      deletePage(oldPage)
      createPage({ ...page, context: { ...page.context, locale } })
    }
  })

  // if(page.path.match(/^\/confirmation/)) {
  //   page.matchPath = "/confirmation/*"
  //   createPage({
  //     path: "/confirmation",
  //     matchPath: '/confirmation/:orderId',
  //     component: path.resolve(`src/page-templates/checkout/confirmation.js`),
  //   });
  // }

}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions


  // Map Crystallize shape names to the page templates
  const templates = {
    Article: path.resolve(`src/page-templates/article/index.js`),
    Product: path.resolve(`src/page-templates/product/index.js`),
    Folder: path.resolve(`src/page-templates/folder/index.js`),
    Search: path.resolve(`src/page-templates/search/index.js`),
  }

  const locales = getLocales()

  const defaultLocale = locales[0]
  if (!defaultLocale) {
    throw new Error("app.config.json: missing default locale (isDefault: true)")
  }

  // Redirect the root path to the correct locale root path
  if (defaultLocale.urlPrefix) {
    createRedirect({
      fromPath: "/",
      toPath: `/${defaultLocale.urlPrefix}`,
      isPermanent: true,
      redirectInBrowser: true,
      statusCode: 301,
      context: {
        locale: defaultLocale,
      },
    })
  }

  // Create all other pages
  await Promise.all(
    locales.map(async (locale) => {
      const sharedPageProps = {
        crystallizeCatalogueLanguage: locale.crystallizeCatalogueLanguage,
        locales: locales.map((l) => ({
          displayName: l.displayName,
          urlPrefix: l.urlPrefix,
        })),
        locale,
      }

      // Create the frontpage
      createPage({
        path: `/${locale.urlPrefix}`,
        component: path.resolve(`src/page-templates/frontpage.js`),
        context: {
          cataloguePath: `/${locale.urlPrefix}`,
          ...sharedPageProps,
        },
      })

      // Create the search page
      createPage({
        path: locale.urlPrefix ? `/${locale.urlPrefix}/search` : "/search",
        component: path.resolve(`src/page-templates/search/index.js`),
        context: {
          cataloguePath: "/",
          ...sharedPageProps,
        },
      })

      // Create account page
      createPage({
        path: `${locale.urlPrefix}/account`,
        component: path.resolve(`src/page-templates/account/index.js`),
        context: {
          cataloguePath: `/`,
          ...sharedPageProps,
        },
      })

      // Create my-account page
      createPage({
        path: `${locale.urlPrefix}/my-account`,
        component: path.resolve(`src/page-templates/my-account/index.js`),
        context: {
          cataloguePath: `/`,
          ...sharedPageProps,
        },
      })

      //create checkout page
      createPage({
        path: `${locale.urlPrefix}/checkout`,
        component: path.resolve(`src/page-templates/checkout/index.js`),
        context: {
          cataloguePath: `/`,
          ...sharedPageProps,
        },
      })

      createPage({
        path: `${locale.urlPrefix}/confirmation`,
        matchPath: `${locale.urlPrefix}/confirmation/:orderId`,
        component: path.resolve(`src/page-templates/checkout/confirmation.js`),
        context: {
          cataloguePath: `/`,
          ...sharedPageProps,
        },
      })


      // Create all other pages
      try {
        /**
         * Get items 5 levels deep from Crystallize.
         * You can get even more levels by querying more children:
         * children {
         *   path
         *   shape {
         *     name
         *   }
         * }
         */
        const { data, errors } = await graphql(`
          query loadAllCrystallizeCatalogueItems {
            crystallize {
              catalogue(language: "${locale.crystallizeCatalogueLanguage}", path: "/") {
                children {
                  path
                  shape {
                    name
                  }
                  children {
                    path
                    shape {
                      name
                    }
                    children {
                      path
                      shape {
                        name
                      }
                      children {
                        path
                        shape {
                          name
                        }
                        children {
                          path
                          shape {
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `)

        if (errors) {
          throw errors
        }

        // Reduce all items into a single flat array
        const items = []
        {
          ;(function add({ path, shape, children }) {
            function mostChildrenAreProducts() {
              const c = children || []
              const productsCount = c.filter((c) => c.shape.name === "Product")
                .length
              return productsCount > c.length / 2
            }

            if (path && shape) {
              // Folders with mostly products in it will be treated like a search page
              if (shape.name === "Folder" && mostChildrenAreProducts()) {
                items.push({
                  path,
                  shape,
                  component: templates.Search,
                  componentName: "Search",
                })
              } else {
                // Ensure that we have a template for this shape
                if (shape.name in templates) {
                  items.push({
                    path,
                    shape,
                    component: templates[shape.name],
                    componentName: shape.name,
                  })
                } else {
                  items.push({
                    path,
                    shape,
                    component: templates.Folder,
                    componentName: "Folder",
                  })
                  console.log(
                    `No template was found for shape "${shape.name}". "${path}" is rendered using the Folder template`
                  )
                }
              }
            }
            if (children) {
              children.forEach(add)
            }
          })(data.crystallize.catalogue)
        }

        items.forEach(({ path, component, componentName }) => {
          let searchProps = {}
          if (componentName === "Search") {
            /**
             * IMPORTANT: this default search specification
             * needs to be the same as the `defaultSpec`
             * in src/lib/search.js
             */
            searchProps = {
              first: 24,
              orderBy: {
                field: "ITEM_NAME",
                direction: "ASC",
              },
              filter: {
                type: "PRODUCT",
                priceVariant: locale.crystallizePriceVariant || "default",
                productVariants: {
                  isDefault: true,
                },
                include: {
                  paths: [path],
                },
              },
              include: {},
            }
            searchProps.aggregationsFilter = searchProps.filter
          }

          // Create pages for each node
          createPage({
            path: locale.urlPrefix ? `/${locale.urlPrefix}${path}` : path,
            component,
            context: {
              cataloguePath: path,
              ...sharedPageProps,
              ...searchProps,
              // Add optional context data to be inserted
              // as props into the page component..
              //
              // The context data can also be used as
              // arguments to the page GraphQL query.
              //
              // The page "path" is always available as a GraphQL
              // argument.
            },
          })
        })
      } catch (error) {
        console.log(
          "Something went wrong fetching data from Crystallize",
          error
        )
      }
    })
  )
}
