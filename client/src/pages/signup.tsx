import { useState, useEffect } from "react";
import { NextPage } from "next";
import { useMutation } from "react-query";
import { Payments } from "@/components/payments";
import { serviceAPIClient } from "@/clients";
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

const subscriptions = [
  {
    name: "Starter",
    price: "",
    type: "Free",
    description:
      "Full access to library.<br /> 5 downloads / month<br />1 user",
    isPlanned: false,
    plan: {
      value: "starter",
      name: "Starter",
      lineItem: {
        sku: "start",
        path: "/pricing-page/starter",
        quantity: 1,
        priceVariantIdentifier: "default",
      },
    },
  },
  {
    name: "Team",
    price: "$20",
    type: "month",
    description:
      "Full access to library.<br /> 50 downloads / month<br />3 users",
    isPlanned: false,
    plan: {
      value: "team",
      name: "Team",
      lineItem: {
        sku: "team",
        path: "/pricing-page/team",
        quantity: 1,
        priceVariantIdentifier: "default",
      },
    },
  },
  {
    name: "Agency",
    price: "$60",
    type: "month",
    description:
      "Full access to library.<br />100 downloads / month<br />unlimited",
    isPlanned: false,
    plan: {
      value: "agency",
      name: "Agency",
      lineItem: {
        sku: "agency",
        path: "/pricing-page/agency",
        quantity: 1,
        priceVariantIdentifier: "default",
      },
    },
  },
];

interface SignupPageProps {}

export const SignupPage: NextPage<SignupPageProps> = () => {
  useOnlyUnauthenticated();

  const [step, setStep] = useState<"signUp" | "checkout" | "success">("signUp");

  const [plan, setPlan] = useState<Plan>(subscriptions[2].plan);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const startSignUp = useStartSignUp();

  // const [email, setEmail] = useState("lhtanh98@gmail.com");
  // const [firstName, setFirstName] = useState("Alex");
  // const [lastName, setLastName] = useState("Luong");

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

  function signUp() {
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
        Nulla non risus vulputate, tristique nisi ut, viverra massa. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices.
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
            {subscriptions.map((subscription, index) => {
              return (
                <SubscriptionCard
                  key={index}
                  {...subscription}
                  isActive={plan?.name === subscription.plan.name}
                  onSelect={(plan) => setPlan(plan)}
                />
              );
            })}
          </Box>

          <Spacer space={12} />

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
            onClick={signUp}
            disabled={startSignUp.isLoading}
          >
            {startSignUp.isLoading ? "Signing Up" : "Sign Up"}
          </Button>

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

// const plans = useQuery("allPlans", () => catalogueClient.request<AllPlansQuery>(AllPlansDocument));

// useEffect(() => {
//   if (!plan && plans.data) {
//     setPlan(productToPlan(plans.data.catalogue.children[0]));
//   }
// }, [plans.data]);

// if (!plans?.data) {
//   return null;
// }
