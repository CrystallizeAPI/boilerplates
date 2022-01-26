# Conference Boilerplate
This boilerplate provides an easy starting point for building a conference website with Crystallize and Next.js. You can also check out the [live demo](https://conference-boilerplate.netlify.app/) of this boilerplate.

**What this guide covers:**

- Setting up your project using the CLI
- Instructions for running the project
- Accessing the development site
- Folder structure of the boilerplate
- Editing the components and the overall theme
- Deploying the project
<img width="1408" alt="conference-boilerplate-hero" src="https://user-images.githubusercontent.com/26195876/151164182-15e54ea1-a9b0-4d58-8f3d-f35b8df517fe.png">

## Getting Started

To create a new project, we'll use the Crystallize CLI. In your terminal, type in the following command:

```bash
npx @crystallize/cli <your-project-name>
```

Running this command will allow you to add in the following:

- The preferred boilerplate, which will be ‘Next.js - Conference’ in this case.
- The tenant: you can either enter your own tenant or go with the demo tenant to test everything out
- Example data: if you would like your tenant to have the same data as the boilerplate, please select ‘Yes’

You project now contains two folders - website and service-api.

## Running the Project

Running the project in development is very straightforward. To run the project, head over to the ‘website’ folder and run the following command:

```bash
yarn dev
```

## Accessing the Development Site

Once the development server is running, you will be able to browse to [http://localhost:3000](http://localhost:3000/).

## Folder Structure (Website)

This section provides you with a better understanding of the folder structure.

**src/components**

Contains all the components used throughout the application

**src/config**

A single file containing the details of the locale

**src/crystallize**

Includes the GraphQL queries used to fetch data from Crystallize

**src/design-system**

This folder includes two other folders - **components** and **theme.** The former includes the styling for reusable components such as buttons while the latter has information related to the theme such as colors, sizes, assets, etc.

**src/pages**

Has all the individual pages the website contains

**src/service-api**

This folder contains all the queries related to the service-api

## Editing the theme

All the theme related files can be found in the **theme** folder located within **design-system.** This includes the colors, spacing, box-shadows, typography used throughout the application.

## Editing the components

Reusable components can be edited by heading over to the **components** folder in the **design-system.** Whereas components such as the footer, the header, the ones used on different pages of the website are to be edited in the **src/components** folder.

### Frontpage

The frontpage is divided into multiple sections which are as follows:

- **Hero -** this is the uppermost section and can be edited by heading over to the **frontpage-hero** component
- **Sponsors -** this is the section titled “Main sponsors”. To edit this, head over to the **sponsors** component
- **USP -** the section that contains the marketing information can be edited in the **frontpage-body** component
- **Speakers -** Next up is the speaker section that contains a list of speakers. This can be edited in the **speaker-section.** Individual speakers can be edited by editing the **speaker** component
- **Schedule -** This section can be edit by heading over to the **schedule** component. The component also contains a filter if you have a multi day conference. In order for the filter to work, you will need to edit the dates in this file. Individual talks can be then edited in the **talk** component
- **Job-board -** editable in the **job-board** component
- **Partners & Sponsors -** the final section contains a list of partners and sponsors. To edit this, head over to the **partners** component

### Merch Store

The merch store consists of a list of products and then individual product pages. To edit the cumulative list of products, head over to the **products** component whereas individual products can be edited in the **product** component.

### Cart and Checkout

The cart and the checkout pages can be edited in their respective files located in the **pages** folder.

### Confirmation

Lastly, the page shown once the order is confirmed can be edited by heading over to **src/checkout/confirmation.**

## Vercel

There are two ways of deploying to Vercel. The easiest is through [the Vercel Github integration](https://vercel.com/docs/git/vercel-for-github). Follow that guide to get automatic deployments for each git push. Alternatively, you can also deploy manually from the command line. In order to enable that you need to [install Vercel](https://vercel.com/download) and login via the CLI:

```
vercel login
```

There are two environment variables you need to set:

```
NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER=<your-tenant>
NEXT_PUBLIC_SERVICE_API_URL=<your-service-api>
```

We recommend that you set these using the [Vercel dashboard](https://vercel.com/docs/environment-variables).

## Deploying to Vercel

Deploying your Crystallize project with Vercel is easy. If you have used the github integration, you simply push to GitHub and that’s it. The deployment will be initiated.

If you want to do it with the CLI, you execute a deployment with this command:

```
vercel
```

This will build the website and deploy it to Vercel. The terminal will say whether the deployment was successful or not. If it has succeeded, you will be given a URL where your site has been deployed.

If you are deploying to production, you can also use the following command to deploy your website to a production domain if you have configured one for your project within the dashboard of Vercel:

```
vercel --prod
```

## Netlify

Similar to Vercel, there are two ways to deploy your project to Netlify as well. You can use GitHub integration by following the Netlify integration guide provided by GitHub or you can do it using the CLI. To deploy using the CLI, make sure to install Netlify-cli:

```bash
npm install -g netlify-cli
```

Once that is installed, log in to Netlify by typing the following command. This redirects you to Netlify where you will be asked to login.

```bash
ntl login
```

## Deploying to Netlify

After logging in, navigate to the root directory and initialise a new Netlify site:

```bash
ntl init
```

- Select the ‘create and configure a new site’ option
- Choose your team
- Next step is to give your website a name, this is optional and can be changed later If no answer is provided, Netlify generates a random one
- Then, you will be asked to provide access to the GitHub account
- The build command can be set to ‘next build’
- Specify the directory you would like to deploy, in our case it is the .next directory
- Lastly, you can specify the folder containing Netlify function. Considering there is no folder for those at present, we can leave it blank

There are two environment variables you need to set:

```
NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER=<your-tenant>
NEXT_PUBLIC_SERVICE_API_URL=<your-service-api>
```

We recommend that you set these using the [Netlify dashboard](https://www.netlify.com/blog/2021/07/05/easy-access-environment-variables/). However, these can also be set in the netlify.toml file along with build settings and deploy settings.

## Next Step: Service API

In order to manage a fully operational conference website, you need to manage basket validation, payments and such. For that, we have prepared a boilerplate for you, the [Service API boilerplate](https://crystallize.com/learn/open-source/boilerplates/service-api), which you would want to add alongside your project. Follow [our guide](https://crystallize.com/learn/open-source/boilerplates/service-api) for how to set it up.
