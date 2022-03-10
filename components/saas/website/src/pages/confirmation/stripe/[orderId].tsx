import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serviceAPIClient } from "@/clients";
import { Box, Flex, Link, Spacer, Typography } from "@/design-system";
import {
  GetOrderDocument,
  GetOrderQuery,
  GetOrderQueryVariables,
} from "@/service-api/get-order.generated";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await serviceAPIClient.request<
    GetOrderQuery,
    GetOrderQueryVariables
  >(GetOrderDocument, { id: params.orderId as string });
  return { props: { data } };
};

const OrderConfirmation = ({ order }) => {
  const lineItem = order.cart[0];
  const { customer } = order;

  return (
    <Flex direction="column" align="start">
      <Typography size={3}>
        Plan: {lineItem.name} - ${Number(order.total.gross) / 10}/month
      </Typography>
      <Spacer space={4} />
      <Typography size={3}>
        Bill to: {customer.firstName} {customer.lastName}
      </Typography>
      <Spacer space={4} />
      <Typography size={3}>
        Email: {customer.addresses.find((a) => a.type === "billing")?.email}
      </Typography>
      <Spacer space={4} />

      <Spacer space={8} />
      <Link
        href="/login"
        css={{ fontWeight: "bold", fontSize: "$4", alignSelf: "center" }}
      >
        Login
      </Link>
    </Flex>
  );
};

export const ConfirmationStripe = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const order = props.data?.orders?.get;

  if (!order) {
    return (
      <Box css={{ width: "$content", mx: "auto", py: "$16" }}>
        <Typography size={4}>Error</Typography>
      </Box>
    );
  }

  return (
    <Flex
      direction="column"
      align="center"
      css={{ width: "$full", textAlign: "center" }}
    >
      <Typography as="h1" variant="heading" size={6}>
        Order Confirmation
      </Typography>

      <Spacer space={8} />

      <OrderConfirmation order={order} />
    </Flex>
  );
};

export default ConfirmationStripe;
