import { SimpleCartItem } from "@/service-api/types.generated";

export interface Plan {
  value: string;
  name: string;
  lineItem: SimpleCartItem;
}
