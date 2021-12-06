import { useState, useEffect } from "react";
import { GetStaticProps, NextPage } from "next";
import { useMutation } from "react-query";
import { Payments } from "@/components/payments";
import { catalogueClient, serviceAPIClient } from "@/clients";
import {
  StartSignUpDocument,
  StartSignUpMutation,
  StartSignUpMutationVariables,
} from "@/service-api/start-sign-up.generated";
// import { AllPlansDocument, AllPlansQuery } from "@/crystallize/queries/allPlans.generated";
import {
  Box,
  Button,
  Flex,
  Link,
  Spacer,
  TextField,
  Typography,
} from "@/design-system";
import { SubscriptionCard } from "@/components/subscription-card";
import { CheckoutModelInput } from "@/service-api/types.generated";
import { Plan } from "@/types/basket";
import { locale } from "@/config/locale";
// import { productToPlan } from "@/utils/productToPlan";
import { useOnlyUnauthenticated } from "@/contexts/auth";
import {
  AllPlansDocument,
  AllPlansQuery,
  AllPlansQueryVariables,
} from "@/crystallize/queries/allPlans.generated";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { Product } from "@/crystallize/types.generated";

export const getStaticProps: GetStaticProps<AllPlansQuery> = async () => {
  const data = await catalogueClient.request<
    AllPlansQuery,
    AllPlansQueryVariables
  >(normalizeDocumentNode(AllPlansDocument));
  return { props: { ...data } };
};

function useStartSignUp() {
  const startMutation = useMutation(
    async (input: StartSignUpMutationVariables) => {
      const response = await serviceAPIClient.request<
        StartSignUpMutation,
        StartSignUpMutationVariables
      >(StartSignUpDocument, input);
      if (!response.user.startSignUp) throw new Error("Error signing up");
    }
  );
  return startMutation;
}

function getSubscriptionPlans(props: AllPlansQuery) {
  return props.catalogue?.children
    .filter((c) => c.__typename === "Product")
    .map((child) => {
      const product = child as Product;
      const [variant] = product?.variants;
      const variantPlans = variant.subscriptionPlans;
      if (variantPlans) {
        const digitalAccessPlan = variantPlans.find(
          (p) => p.identifier === "digital-access"
        );

        if (digitalAccessPlan) {
          const monthlyPeriod = digitalAccessPlan.periods.find(
            (p) => p.name === "Month"
          );
          if (monthlyPeriod) {
            const selectedPriceVariant =
              monthlyPeriod.recurring.priceVariants?.find(
                (p) => p.identifier === "default"
              );

            const meteredVariables =
              monthlyPeriod.recurring?.meteredVariables || [];
            return {
              name: variant.name,
              price: selectedPriceVariant,
              downloadsPrMonth: meteredVariables.find(
                (m) => m.identifier === "download"
              )?.tiers[1]?.threshold,
              usersPrMonth: meteredVariables.find(
                (m) => m.identifier === "user"
              )?.tiers[1]?.threshold,
              plan: {
                value: variant.sku,
                name: variant.name,
                lineItem: {
                  sku: variant.sku,
                  path: product.path,
                  quantity: 1,
                  priceVariantIdentifier: "default",
                },
              },
            };
          }
        }
      }

      return null;
    })
    .filter(Boolean);
}

export const SignupPage: NextPage<AllPlansQuery> = (props) => {
  useOnlyUnauthenticated();
  const subscriptionPlans = getSubscriptionPlans(props);

  const [step, setStep] = useState<"signUp" | "checkout" | "success">("signUp");
  const [plan, setPlan] = useState<Plan>(subscriptionPlans[2].plan);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const startSignUp = useStartSignUp();

  function getURL(path: string) {
    if (typeof window === "undefined") return "";
    return `${location?.protocol}//${location?.host}${path}`;
  }

  const checkoutModel: CheckoutModelInput = {
    basketModel: { locale, cart: plan ? [plan.lineItem] : [] },
    customer: { firstName, lastName, addresses: [{ type: "billing", email }] },
    confirmationURL: getURL(`/confirmation/{crystallizeOrderId}`),
    checkoutURL: getURL(`/checkout`),
    termsURL: getURL(`/terms`),
  };

  function onSignup(event) {
    event.preventDefault();

    startSignUp.mutate({ email, firstName, lastName });
  }

  useEffect(() => {
    if (startSignUp.isSuccess) setStep("checkout");
  }, [startSignUp.isSuccess]);

  return (
    <Flex
      direction="column"
      align="center"
      css={{ width: "$full", textAlign: "center" }}
    >
      <Typography as="h1" variant="heading" size={{ "@initial": 7, "@bp1": 9 }}>
        Sign Up
      </Typography>
      <Spacer space={10} />
      <Typography as="p" size="4">
        Choose a plan that suits you. All the plans include full access to the
        library, and only differs in the amount of downloads and users pr.
        month.
      </Typography>
      <Spacer space={10} />

      {step === "signUp" ? (
        <>
          <Box
            css={{
              display: "grid",
              gap: "$12",
              gridTemplateColumns: "1fr",
              "@bp1": {
                gridTemplateColumns: "repeat(3, minmax($48, 1fr))",
                gap: "$6",
                width: "$full",
              },
            }}
          >
            {subscriptionPlans.map((subscriptionPlan, index) => {
              return (
                <SubscriptionCard
                  key={index}
                  {...subscriptionPlan}
                  isActive={plan?.name === subscriptionPlan.name}
                  onSelect={(plan) => setPlan(plan)}
                />
              );
            })}
          </Box>

          <Spacer space={12} />

          <Box css={{ width: "$full" }} as="form" onSubmit={onSignup}>
            <Flex direction="row" css={{ width: "$full" }}>
              <TextField
                placeholder="First Name"
                cssForWrapper={{ flex: 1 }}
                value={firstName}
                onChange={(e) => setFirstName(e.currentTarget.value)}
              />

              <Spacer direction="horizontal" space={5} />

              <TextField
                placeholder="Last Name"
                cssForWrapper={{ flex: 1 }}
                value={lastName}
                onChange={(e) => setLastName(e.currentTarget.value)}
              />
            </Flex>

            <Spacer space={5} />

            <TextField
              placeholder="Email"
              cssForWrapper={{ width: "$full" }}
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />

            <Spacer space={5} />

            {startSignUp.isError ? (
              <>
                <Typography
                  css={{
                    width: "$full",
                    textAlign: "left",
                    color: "$error",
                  }}
                >
                  {(startSignUp.error as Error)?.message}
                </Typography>
                <Spacer space={5} />
              </>
            ) : null}

            <Button
              css={{ width: "$full" }}
              type="submit"
              disabled={startSignUp.isLoading}
            >
              {startSignUp.isLoading ? "Signing Up" : "Sign Up"}
            </Button>
          </Box>

          <Spacer space={8} />

          <Flex direction={{ "@initial": "column", "@bp1": "row" }}>
            <Typography size="3">Already have an account?</Typography>

            <Spacer
              direction={{ "@initial": "vertical", "@bp1": "horizontal" }}
              space={2}
            />

            <Link href="/signup" css={{ fontWeight: "bold", fontSize: "$3" }}>
              Log in
            </Link>
          </Flex>
        </>
      ) : step === "checkout" ? (
        <Payments
          checkoutModel={checkoutModel}
          onSuccess={() => setStep("success")}
          onError={() => {}}
        />
      ) : (
        <Typography as="p" size="4">
          Success
        </Typography>
      )}
    </Flex>
  );
};

export default SignupPage;
