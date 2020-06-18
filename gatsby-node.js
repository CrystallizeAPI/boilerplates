const path = require(`path`)
const config = require("./gatsby-config")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions

  // Map Crystallize shape names to the page templates
  const templates = {
    Article: path.resolve(`src/page-templates/article.js`),
    Product: path.resolve(`src/page-templates/product/index.js`),
    Folder: path.resolve(`src/page-templates/folder.js`),
  }

  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async language => {
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
              catalogue(language: "${language}", path: "/") {
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
            if (path && shape) {
              // Ensure that we have a template for this shape
              if (shape.name in templates) {
                items.push({ path, shape, component: templates[shape.name] })
              } else {
                items.push({ path, shape, component: templates.Folder })
                console.log(
                  `No template was found for shape "${shape.name}". "${path}" is rendered using the Folder template`
                )
              }
            }
            if (children) {
              children.forEach(add)
            }
          })(data.crystallize.catalogue)
        }

        items.forEach(({ path, component }) => {
          //   createRedirect({
          //     fromPath: "/",
          //     toPath: `/${language}`,
          //     isPermanent: true,
          //     redirectInBrowser: true,
          //     statusCode: 301,
          //     context: {
          //       language,
          //     },
          //   })

          // Create pages for each node
          createPage({
            path: `/${language}${path}`,
            component,
            context: {
              cataloguePath: path,
              language,
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
