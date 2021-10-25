import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { serviceAPIClient } from "@/clients";
import { Box, Flex, Link, Spacer, Typography } from "@/design-system";
import {
  TillitConfirmationDocument,
  TillitConfirmationQuery,
  TillitConfirmationQueryVariables,
} from "@/service-api/tillit-confirmation.generated";

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const data = await serviceAPIClient.request<
    TillitConfirmationQuery,
    TillitConfirmationQueryVariables
  >(TillitConfirmationDocument, { id: params.orderId as string });
  return { props: { data } };
};

const OrderConfirmation = ({ order }) => {
  const lineItem = order.line_items[0];
  const address = order.billing_address;
  const company = order.buyer.company;
  const representative = order.buyer.representative;
  return (
    <Flex direction="column" align="start">
      <Typography size={3}>
        Order: {lineItem.name} - ${Number(order.gross_amount) / 10}/month
      </Typography>
      <Spacer space={4} />
      <Typography size={3}>Bill to {company.company_name}</Typography>
      <Spacer space={4} />
      <Typography size={3}>
        Billing address: {address.street_address}, {address.city}{" "}
        {address.postalCode} {address.country}
      </Typography>
      <Spacer space={4} />
      <Typography size={3}>
        Purchased by {representative.first_name} {representative.last_name}
      </Typography>
      <Spacer space={4} />
      <Typography size={3}>
        {representative.email} - {representative.phone_number}
      </Typography>
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

export const ConfirmationTillit = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const order = props.data?.paymentProviders?.tillit?.confirmation;

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

      {order.state === "VERIFIED" ? (
        <OrderConfirmation order={order} />
      ) : (
        <Typography size={4}>Order Unverfied</Typography>
      )}
    </Flex>
  );
};

export default ConfirmationTillit;
