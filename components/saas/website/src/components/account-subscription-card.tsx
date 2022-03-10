import { useMutation, useQueryClient } from "react-query";
import { AllPlansQuery } from "@/crystallize/queries/allPlans.generated";
import { Box, Spacer, Button, Typography, Link, Flex } from "@/design-system";
import { CheckIcon } from "@radix-ui/react-icons";
import { componentContent } from "@/crystallize/utils/componentContent";
import {
  ChangePlanDocument,
  ChangePlanMutation,
  ChangePlanMutationVariables,
} from "@/service-api/change-plan.generated";
import { serviceAPIClient } from "@/clients";

function useChangePlan(input: ChangePlanMutationVariables) {
  const queryClient = useQueryClient();
  return useMutation(
    () => {
      return serviceAPIClient.request<
        ChangePlanMutation,
        ChangePlanMutationVariables
      >(ChangePlanDocument, input);
    },
    { onSuccess: () => queryClient.invalidateQueries("account") }
  );
}

interface AccountSubscriptionCardProps {
  subscription: any;
  isActive: boolean;
  plan: AllPlansQuery["catalogue"]["children"][number];
}

export const AccountSubscriptionCard = ({
  subscription,
  isActive,
  plan: _plan,
}: AccountSubscriptionCardProps) => {
  const plan = componentContent(_plan, "Product");
  const changePlan = useChangePlan({ id: subscription?.id, plan: plan.path });

  const price = plan.variants[0].price;

  const willRenew = !!subscription?.status?.renewAt;

  return (
    <Box
      css={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        boxShadow: "$card",
        borderRadius: "$3xl",
        py: "$3",
        px: "$6",
        textAlign: "center",
        backgroundColor: isActive ? "$primary" : "initial",
      }}
    >
      <Flex justify="start" css={{ width: "$full" }}>
        <Box
          css={{
            backgroundColor: "$white",
            borderStyle: "solid",
            borderWidth: "thin",
            borderRadius: "50%",
            borderColor: "$grey",
            width: isActive ? "$6" : "$6",
            height: isActive ? "$6" : "$6",
          }}
        >
          {isActive && <CheckIcon width="20" height="20" />}
        </Box>
      </Flex>

      <Spacer space={2} />

      <Typography
        variant="text"
        size="4"
        css={{
          opacity: isActive ? 1 : 0.7,
          color: isActive ? "$white" : "inherit",
        }}
      >
        {plan.name}
      </Typography>

      <Spacer space={6} />

      <Typography
        variant="heading"
        size="7"
        css={{
          opacity: isActive ? 1 : 0.7,
          color: isActive ? "$white" : "inherit",
        }}
      >
        {price === 0 ? (
          "Free"
        ) : (
          <>
            ${price}
            <Typography variant="heading" size="5">
              /month
            </Typography>
          </>
        )}
      </Typography>

      <Spacer space={5} />

      <Typography
        as="div"
        variant="text"
        size="4"
        css={{
          lineHeight: "$relaxed",
          opacity: isActive ? 1 : 0.7,
          color: isActive ? "$white" : "inherit",
        }}
      >
        <div>Full access to library.</div>
        <div>50 downloads / month</div>
        <div>3 users</div>
      </Typography>

      <Spacer space={9} />

      {!willRenew ? null : isActive ? (
        <>
          <Button variant="secondary" on="primary" css={{ width: "$full" }}>
            Current Plan
          </Button>
          <Spacer />
          <Button variant="primary" on="primary" css={{ width: "$full" }}>
            Pause Subscription
          </Button>
          <Spacer />
          <Link
            as="button"
            css={{ border: 0, backgroundColor: "transparent", color: "$white" }}
          >
            Cancel Plan
          </Link>
        </>
      ) : (
        <Button
          variant="primary"
          css={{ width: "$full" }}
          onClick={() => changePlan.mutate()}
        >
          {changePlan.isLoading ? "Changing Plan..." : "Change Plan"}
        </Button>
      )}

      <Spacer space={isActive ? 2 : 0} />
    </Box>
  );
};
