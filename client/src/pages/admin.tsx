import { GetStaticProps, NextPage } from "next";
import { useQuery } from "react-query";
import { useAuth } from "@/contexts/auth";
import { Box, Flex, Spacer, Button, Typography } from "@/design-system";
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
  if (!catalogue) return null;

  const query = useAccountQuery();

  if (query.data) {
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
          {query.data.subscriptions?.data?.edges?.length ? (
            query.data.subscriptions?.data?.edges?.map(
              ({ node: subscription }) => {
                return (
                  <AdminSubscriptionItem
                    key={subscription.id}
                    subscription={subscription}
                  />
                );
              }
            )
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
