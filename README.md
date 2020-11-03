# Crystallize Gatsby Boilerplate

[![React: latest][0]][1] [![Gatsby: latest][2]][3]

The bare minimum skeleton you need to get a frontend up and running on the
[headless ecommerce][8] & GraphQL based [product Information Management][9]
service [Crystallize][10]. [React commerce with Gatsby][11].

This frontend boilerplate is a great starting point when building [React
ecommerce][11] experiences with [frontend performance][12] in focus. You can
have rich ecommerce content with the super structured [PIM][13] engine in
Crystallize powering your product catalogue.

Fast frontend performance delivers a better ecommerce experience and is a key
ingredient in the [ecommerce SEO checklist][14]. [Rich content driven ecommerce
experiences][15] builds the foundation for a [content strategy for exponential
growth marketing][16].

Check it out, the boilerplate is Open Source and MIT licensed.

## Getting Started

You can use [Crystallize CLI][17] to bootstrap a project with this
`Gatsby + React` boilerplate.

Simply run the following command (>= Node 8 required):

```sh
npx @crystallize/cli my-project
```

This will walk you through the steps of specifying your tenant, choosing the
template (Gatsby.js + React) and adding additional features such as Netlify.

Once your project has been created, you can simply navigate into your project's
directory and run the following to start up your development server:

```sh
npm run dev
# or
yarn dev
```

This will start up the server on http://localhost:8000 for development.

## App Structure

### `src/page-templates`

We use the `src/page-templates/` directory to hold the actual entry pages
related to query result in `gatsby-node.js`.

## Deploying Your Project

There are multiple alternatives for deployments, check out one of the ones below:

### Deploying with [Vercel Now][19]

- Register a Vercel account
- Install Vercel Now: `npm i -g now`
- Run `now`

### Deploying with [Netlify][18]

- Register a Netlify account
- Create a new project
- Link it with your Git repository
- Push to `master`

[0]: https://img.shields.io/badge/react-latest-44cc11.svg?style=flat-square
[1]: https://github.com/facebook/react
[2]: https://img.shields.io/badge/next-latest-44cc11.svg?style=flat-square
[3]: https://www.gatsbyjs.org/
[4]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[5]: https://github.com/prettier/prettier
[6]: https://img.shields.io/badge/code_linter-eslint-463fd4.svg?style=flat-square
[7]: https://github.com/prettier/prettier
[8]: https://crystallize.com/product
[9]: https://crystallize.com/product/product-information-management
[10]: https://crystallize.com
[11]: https://crystallize.com/developers
[12]: https://crystallize.com/blog/frontend-performance-measuring-kpis
[13]: https://crystallize.com/product/product-information-management
[14]: https://crystallize.com/blog/ecommerce-seo-checklist
[15]: https://crystallize.com/blog/content-rich-storytelling-makes-juicy-ecommerce
[16]: https://snowball.digital/blog/content-strategy-for-exponential-growth-marketing
[17]: https://github.com/crystallizeapi/crystallize-cli
[18]: https://www.netlify.com/
[19]: https://vercel.com
