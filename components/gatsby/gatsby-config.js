require("dotenv").config({
  path: `.env`,
})

/**
 * If you have enabled authentication on your APIs, then you need to
 * proxy the requests through the Service API:
 * const crystallizeApiUrlBase = process.env.GATSBY_PUBLIC_SERVICE_API_URL.replace(
 *  '/graphql',
 *  '/crystallize'
 * );
 * Read more about authentication for the APIs here:
 * https://crystallize.com/learn/developer-guides/api-overview/authentication
 */
const crystallizeApiUrlBase = `https://api.crystallize.com/${process.env.GATSBY_CRYSTALLIZE_TENANT_ID}`

module.exports = {
  siteMetadata: {
    title: `Crystallize`,
    description: `Headless ecommerce running on Crystallize and Gatsby`,
    author: `@crystallizeapi`,
    crystallizeApiUrlBase,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          components: "./components", // <- will become ./src/components
          ui: "./ui", // <- will become ./src/components
          lib: "./lib", // <- will become ./src/components
          images: "./images", // <- will become ./src/components
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Crystallize`,
        short_name: `Crystallize`,
        start_url: `/`,
        icon: `src/images/shop-logo.svg`,
        background_color: `#f3f4f6`,
        theme_color: `#B7E2E4`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "CRYSTALLIZE",
        // This is the field under which it's accessible
        fieldName: "crystallize",
        // URL to query from
        url: `${crystallizeApiUrlBase}/catalogue`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "CRYSTALLIZE_SEARCH",
        // This is the field under which it's accessible
        fieldName: "crystallize_search",
        // URL to query from
        url: `${crystallizeApiUrlBase}/search`,
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SERVICE_API",
        // This is the field under which it's accessible
        fieldName: "service_api",
        // URL to query from
        url: process.env.GATSBY_PUBLIC_SERVICE_API_URL,
      },
    },
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
