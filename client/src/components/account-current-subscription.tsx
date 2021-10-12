import { Box, Flex, Spacer, Typography } from "@/design-system";
import { AllPlansQuery } from "@/crystallize/queries/allPlans.generated";
import { AccountSubscriptionCard } from "@/components/account-subscription-card";
import { componentContent } from "@/crystallize/utils/componentContent";

interface AccountCurrentSubscriptionProps {
  subscription: any;
  plans: AllPlansQuery["catalogue"];
}

export const AccountCurrentSubscription = ({
  subscription,
  plans,
}: AccountCurrentSubscriptionProps) => {
  return (
    <Box as="section">
      <Typography
        as="h2"
        variant="heading"
        size={9}
        css={{ textAlign: "center" }}
      >
        Current Subscription
      </Typography>

      <Spacer space={16} />

      <Flex justify="around">
        {plans.children
          .sort(
            (a, b) =>
              componentContent(a, "Product").variants[0].price -
              componentContent(b, "Product").variants[0].price
          )
          .map((_plan) => {
            const plan = componentContent(_plan, "Product");
            const isActive = subscription?.item?.name === plan.name;
            return (
              <AccountSubscriptionCard
                key={plan.id}
                plan={plan}
                isActive={isActive}
              />
            );
          })}
      </Flex>
    </Box>
  );
};
