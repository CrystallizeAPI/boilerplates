import { GraphQLClient } from "graphql-request";

const NEXT_PUBLIC_SERVICE_API_URL = process.env.NEXT_PUBLIC_SERVICE_API_URL;

// Catalogue API
const CATALOGUE_API_URL = `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`;
export const catalogueClient = new GraphQLClient(CATALOGUE_API_URL, {
  credentials: "include",
  mode: "cors",
});
// export const catalogueClient = new GraphQLClient(`${NEXT_PUBLIC_SERVICE_API_URL}/api/crystallize/catalogue`, {
//   credentials: "include",
//   mode: "cors",
// });

// Service API
// const NEXT_PUBLIC_SERVICE_API_URL = process.env.NEXT_PUBLIC_SERVICE_API_URL;
export const serviceAPIClient = new GraphQLClient(
  `${NEXT_PUBLIC_SERVICE_API_URL}/api/graphql`,
  {
    credentials: "include",
    mode: "cors",
  }
);
