import { GetStaticProps, NextPage } from "next";
import { useQuery } from "react-query";
import { useAuth } from "@/contexts/auth";
import { Box, Spacer, Button, Typography } from "@/design-system";
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
import { AccountPersonalInfo } from "@/components/account-personal-info";
import { AccountPaymentMethod } from "@/components/account-payment-method";
import { AccountCurrentSubscription } from "@/components/account-current-subscription";
import { AccountPaymentHistory } from "@/components/account-payment-history";

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

export const AccountPage: NextPage<AllPlansQuery> = ({ catalogue }) => {
  if (!catalogue) return null;

  const user = useAuth();
  const query = useAccountQuery();

  if (query.data) {
    const subscription = query.data.subscriptions.data?.edges?.[0]?.node;
    const paymentMethod = subscription?.paymentMethod;
    return (
      <Box css={{ width: "$content", mx: "auto", py: "$16" }}>
        <Box as="section">
          <Typography
            as="h2"
            variant="heading"
            size={9}
            css={{ textAlign: "center" }}
          >
            My Account
          </Typography>

          <Spacer space={12} />

          <AccountPersonalInfo customer={query.data.user} />

          {subscription && paymentMethod ? (
            <>
              <Spacer space={12} />

              <AccountPaymentMethod
                subscription={subscription}
                paymentMethod={paymentMethod}
              />
            </>
          ) : null}
        </Box>

        <Spacer space={24} />

        <AccountCurrentSubscription
          subscription={query.data.subscriptions.data?.edges?.[0]?.node}
          plans={catalogue}
        />

        <Spacer space={24} />

        <AccountPaymentHistory orders={query.data.orders} />

        <Spacer space={48} />

        <Button as="a" variant="secondary" href={user?.logoutLink}>
          Logout
        </Button>
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

export default AccountPage;
