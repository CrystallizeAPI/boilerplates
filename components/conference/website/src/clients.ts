import { GraphQLClient } from "graphql-request";

const NEXT_PUBLIC_SERVICE_API_URL = process.env.NEXT_PUBLIC_SERVICE_API_URL;

// Catalogue API
// https://crystallize.com/learn/developer-guides/catalogue-api
const CATALOGUE_API_URL = `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`;
export const catalogueClient = new GraphQLClient(CATALOGUE_API_URL, {
  mode: "cors",
});

// Service API
// https://crystallize.com/learn/open-source/boilerplates/service-api
export const serviceAPIClient = new GraphQLClient(
  `${NEXT_PUBLIC_SERVICE_API_URL}/api/graphql`,
  {
    credentials: "include",
    mode: "cors",
  }
);
