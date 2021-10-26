import { useMutation, useQueryClient } from "react-query";
import { serviceAPIClient } from "@/clients";
import { Box, Flex, Button, Typography } from "@/design-system";
import {
  DeleteOrderDocument,
  DeleteOrderMutation,
  DeleteOrderMutationVariables,
} from "@/service-api/delete-order.generated";

interface AdminOrderItemProps {
  order: any;
}

export function useDeleteOrder(id: string) {
  const queryClient = useQueryClient();
  return useMutation(
    () =>
      serviceAPIClient.request<
        DeleteOrderMutation,
        DeleteOrderMutationVariables
      >(DeleteOrderDocument, { id }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("account");
      },
    }
  );
}

export const AdminOrderItem = ({ order }: AdminOrderItemProps) => {
  const deleteOrder = useDeleteOrder(order.id);

  return (
    <Flex
      key={order.id}
      justify="between"
      css={{
        width: "$full",
        border: "1px solid $black",
        p: "$4",
        borderRadius: "$lg",
      }}
    >
      <Typography>Order ID: {order.id}</Typography>
      <Box>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => deleteOrder.mutate()}
        >
          {deleteOrder.isLoading ? "Deleting..." : "Delete"}
        </Button>
      </Box>
    </Flex>
  );
};
