import { AllPlansQuery } from "@/crystallize/queries/allPlans.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Plan } from "@/types/basket";
import { productToPlan } from "@/utils/productToPlan";

interface PlanRadioProps {
  currentPlan?: Plan;
  handlePlanChange: (plan: Plan) => void;
  product: AllPlansQuery["catalogue"]["children"][number];
}

export const PlanRadio = ({
  currentPlan,
  handlePlanChange,
  product,
}: PlanRadioProps) => {
  const p = componentContent(product, "Product");
  const variant = p.variants[0];

  return (
    <div>
      <label>
        <input
          type="radio"
          name="plan"
          value={variant.sku}
          checked={currentPlan?.value === variant.sku}
          onChange={() => handlePlanChange(productToPlan(product))}
        />
        {variant.name} - ${variant.priceVariants[0].price}/month
      </label>
      <br />
    </div>
  );
};
