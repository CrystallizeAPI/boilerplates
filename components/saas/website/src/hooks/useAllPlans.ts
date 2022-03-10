import { useQuery } from "react-query";
import { catalogueClient } from "@/clients";

import {
  AllPlansDocument,
  AllPlansQuery,
} from "@/crystallize/queries/allPlans.generated";

export function useAllPlans() {
  const allPlans = useQuery("allPlans", () =>
    catalogueClient.request<AllPlansQuery>(AllPlansDocument)
  );

  return allPlans;
}
