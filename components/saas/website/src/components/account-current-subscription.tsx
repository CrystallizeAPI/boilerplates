import { Box, Flex, Spacer, Typography } from "@/design-system";
import { AllPlansQuery } from "@/crystallize/queries/allPlans.generated";
import { AccountSubscriptionCard } from "@/components/account-subscription-card";
import { componentContent } from "@/crystallize/utils/componentContent";

interface AccountCurrentSubscriptionProps {
  activeSubscriptionContract: any;
  renewalSubscriptionContract: any;
  plans: AllPlansQuery["catalogue"];
}

export const AccountCurrentSubscription = ({
  activeSubscriptionContract,
  renewalSubscriptionContract,
  plans,
}: AccountCurrentSubscriptionProps) => {
  const isDifferent =
    Boolean(renewalSubscriptionContract) &&
    renewalSubscriptionContract?.id !== activeSubscriptionContract?.id;

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
            const isActive =
              activeSubscriptionContract?.item?.name === plan.name;
            return (
              <AccountSubscriptionCard
                key={plan.id}
                subscription={activeSubscriptionContract}
                plan={plan}
                isActive={isActive}
              />
            );
          })}
      </Flex>

      {renewalSubscriptionContract ? (
        <>
          <Spacer space={16} />

          <Box
            css={{
              backgroundColor: "$white",
              borderRadius: "$lg",
              boxShadow: "$card",
              p: "$6",
            }}
          >
            <Typography>
              Renew at{" "}
              {Intl.DateTimeFormat().format(
                new Date(renewalSubscriptionContract?.status?.renewAt)
              )}{" "}
              with {renewalSubscriptionContract?.item?.name} plan
            </Typography>
          </Box>
        </>
      ) : null}
    </Box>
  );
};
