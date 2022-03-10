import { GetStaticProps, NextPage } from "next";
import { useQuery } from "react-query";
import { useAuth, useOnlyAuthenticated } from "@/contexts/auth";
import { Box, Flex, Spacer, Typography } from "@/design-system";
import { serviceAPIClient, catalogueClient } from "@/clients";
import {
  AccountDocument,
  AccountQuery,
  AccountQueryVariables,
} from "@/service-api/account.generated";
import {
  AllPlansDocument,
  AllPlansQuery,
  AllPlansQueryVariables,
} from "@/crystallize/queries/allPlans.generated";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { AdminOrderItem } from "@/components/admin-order-item";
import { AdminSubscriptionItem } from "@/components/admin-subscription-item";

function useAccountQuery() {
  const user = useAuth();

  const query = useQuery(
    "account",
    () =>
      serviceAPIClient.request<AccountQuery, AccountQueryVariables>(
        AccountDocument,
        {
          customerIdentifier: user.email,
        }
      ),
    { enabled: user.isLoggedIn }
  );

  return query;
}

export const getStaticProps: GetStaticProps<AllPlansQuery> = async () => {
  const data = await catalogueClient.request<
    AllPlansQuery,
    AllPlansQueryVariables
  >(normalizeDocumentNode(AllPlansDocument));
  return { props: { ...data } };
};

export const AdminPage: NextPage<AllPlansQuery> = ({ catalogue }) => {
  useOnlyAuthenticated();

  if (!catalogue) return null;

  const query = useAccountQuery();

  if (query.data) {
    const subscriptionContracts = query.data.subscriptionContracts?.data?.edges;
    return (
      <Box css={{ width: "$content", mx: "auto", py: "$16" }}>
        <Typography as="h2" size="4" css={{ fontWeight: "bold" }}>
          Orders
        </Typography>

        <Spacer space={4} />

        <Flex direction="column" align="start" css={{ gap: "$4" }}>
          {query.data.orders?.data?.edges?.length ? (
            query.data.orders?.data?.edges?.map(({ node: order }) => {
              return <AdminOrderItem key={order.id} order={order} />;
            })
          ) : (
            <Typography>No Orders...</Typography>
          )}
        </Flex>

        <Spacer space={12} />

        <Typography as="h2" size="4" css={{ fontWeight: "bold" }}>
          Subscriptions
        </Typography>

        <Spacer space={4} />

        <Flex direction="column" align="start" css={{ gap: "$4" }}>
          {subscriptionContracts ? (
            subscriptionContracts.map(({ node: subscriptionContract }) => {
              return (
                <AdminSubscriptionItem
                  key={subscriptionContract.id}
                  subscriptionContract={subscriptionContract}
                />
              );
            })
          ) : (
            <Typography>No Subscriptions...</Typography>
          )}
        </Flex>
      </Box>
    );
  }

  if (query.isLoading) {
    return (
      <Box css={{ width: "$content", mx: "auto", fontFamily: "$body" }}>
        <p>Loading...</p>
      </Box>
    );
  }

  return null;
};

export default AdminPage;
