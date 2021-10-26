import { AllPlansQuery } from "@/crystallize/queries/allPlans.generated";
import { Plan } from "@/types/basket";
import { componentContent } from "@/crystallize/utils/componentContent";

export function productToPlan(
  product: AllPlansQuery["catalogue"]["children"][number]
): Plan {
  const p = componentContent(product, "Product");
  const variant = p.variants[0];
  return {
    value: variant.sku,
    name: variant.name,
    lineItem: {
      sku: variant.sku,
      path: p.path,
      quantity: 1,
      priceVariantIdentifier: variant.priceVariants[0].identifier,
    },
  };
}
