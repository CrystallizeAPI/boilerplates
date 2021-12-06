import { useMutation, useQueryClient } from "react-query";
import { serviceAPIClient } from "@/clients";
import { Box, Flex, Button, Typography } from "@/design-system";
import {
  DeleteSubscriptionContractDocument,
  DeleteSubscriptionContractMutation,
  DeleteSubscriptionContractMutationVariables,
} from "@/service-api/delete-subscription.generated";

interface AdminSubscriptionItemProps {
  subscriptionContract: any;
}

export function useDeleteSubscriptionContract(id: string) {
  const queryClient = useQueryClient();
  return useMutation(
    () =>
      serviceAPIClient.request<
        DeleteSubscriptionContractMutation,
        DeleteSubscriptionContractMutationVariables
      >(DeleteSubscriptionContractDocument, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("account");
      },
    }
  );
}

export const AdminSubscriptionItem = ({
  subscriptionContract,
}: AdminSubscriptionItemProps) => {
  const deleteSubscriptionContract = useDeleteSubscriptionContract(
    subscriptionContract.id
  );

  return (
    <Flex
      key={subscriptionContract.id}
      justify="between"
      css={{
        width: "$full",
        border: "1px solid $black",
        p: "$4",
        borderRadius: "$lg",
      }}
    >
      <Typography>Subscription ID: {subscriptionContract.id}</Typography>
      <Box>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => deleteSubscriptionContract.mutate()}
        >
          {deleteSubscriptionContract.isLoading ? "Deleting..." : "Delete"}
        </Button>
      </Box>
    </Flex>
  );
};
