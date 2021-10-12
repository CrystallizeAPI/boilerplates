import { GraphQLClient } from "graphql-request";

const CATALOGUE_API_URL = `https://api.crystallize.com/${process.env.NEXT_PUBLIC_CRYSTALLIZE_TENANT_IDENTIFIER}/catalogue`;

export const catalogueClient = new GraphQLClient(CATALOGUE_API_URL);
