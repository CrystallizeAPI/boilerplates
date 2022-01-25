import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serviceAPIClient } from "@/clients";
import { Box, Flex, Typography } from "@/design-system";
import {
  GetOrderDocument,
  GetOrderQuery,
  GetOrderQueryVariables,
} from "@/service-api/get-order.generated";
import Confirmation from "@/components/checkout/confirmation";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await serviceAPIClient.request<
    GetOrderQuery,
    GetOrderQueryVariables
  >(GetOrderDocument, { id: params.orderId as string });

  return { props: { data } };
};

export const ConfirmationStripe = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const order = props.data?.orders?.get;

  if (!order) {
    return (
      <Box css={{ width: "$content", mx: "auto", py: "$16" }}>
        <Typography size={4}>
          Please wait for the order to be processed...
        </Typography>
      </Box>
    );
  }

  return (
    <Flex direction="column">
      <Confirmation order={order} success={true} />
    </Flex>
  );
};

export default ConfirmationStripe;
