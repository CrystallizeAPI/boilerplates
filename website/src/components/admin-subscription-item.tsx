import { useMutation, useQueryClient } from "react-query";
import { serviceAPIClient } from "@/clients";
import { Box, Flex, Button, Typography } from "@/design-system";
import {
  DeleteSubscriptionDocument,
  DeleteSubscriptionMutation,
  DeleteSubscriptionMutationVariables,
} from "@/service-api/delete-subscription.generated";

interface AdminSubscriptionItemProps {
  subscription: any;
}

export function useDeleteSubscription(id: string) {
  const queryClient = useQueryClient();
  return useMutation(
    () =>
      serviceAPIClient.request<
        DeleteSubscriptionMutation,
        DeleteSubscriptionMutationVariables
      >(DeleteSubscriptionDocument, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("account");
      },
    }
  );
}

export const AdminSubscriptionItem = ({
  subscription,
}: AdminSubscriptionItemProps) => {
  const deleteSubscription = useDeleteSubscription(subscription.id);

  return (
    <Flex
      key={subscription.id}
      justify="between"
      css={{
        width: "$full",
        border: "1px solid $black",
        p: "$4",
        borderRadius: "$lg",
      }}
    >
      <Typography>Subscription ID: {subscription.id}</Typography>
      <Box>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => deleteSubscription.mutate()}
        >
          {deleteSubscription.isLoading ? "Deleting..." : "Delete"}
        </Button>
      </Box>
    </Flex>
  );
};
