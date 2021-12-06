import { FormEventHandler, useState, useEffect } from "react";
import { useQuery } from "react-query";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { serviceAPIClient } from "@/clients";
import { useStripeConfig } from "@/hooks/useStripeConfig";
import { useStripeLoader } from "@/hooks/useStripeLoader";
import { CheckoutModelInput } from "@/service-api/types.generated";
import {
  StripePaymentIntentDocument,
  StripePaymentIntentMutation,
  StripePaymentIntentMutationVariables,
} from "@/service-api/stripe-payment-intent.generated";
import {
  ConfirmStripeOrderDocument,
  ConfirmStripeOrderMutation,
  ConfirmStripeOrderMutationVariables,
} from "@/service-api/stripe-confirm-order.generated";
import { Box, Button, Spacer, Typography, global } from "@/design-system";
import { StripeLoader } from "@/components/stripe-loader";
import { PaymentProps } from "./types";

const stripeStyles = global({
  ".StripeElement": {
    padding: "8px 16px",
    border: "1px solid black",
    borderRadius: "0.75rem",
    height: "3.5rem",
    boxSizing: "border-box",
    display: "flex",
    alignItems: "center",
  },
  ".StripeElement > div": {
    width: "$full",
  },
});

interface FormProps extends PaymentProps {
  stripeClientSecret?: string;
  checkoutModel: CheckoutModelInput;
}

export const Form = ({
  stripeClientSecret,
  checkoutModel,
  onSuccess,
  onError = (error) => console.log(error),
}: FormProps) => {
  stripeStyles();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (stripe) {
      stripe.elements({
        fonts: [{ cssSrc: "https://fonts.googleapis.com/css?family=Poppins" }],
      });
    }
  }, [stripe]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    go();

    async function go() {
      if (!stripe || !elements) {
        setTimeout(go, 100);
        return;
      }

      const { customer } = checkoutModel;
      debugger;
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        stripeClientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: `${customer.firstName} ${customer.lastName}`,
            },
          },
        }
      );

      if (error) {
        onError(new Error(error.message));
        return;
      }

      // The payment has been processed!
      if (paymentIntent.status !== "succeeded") {
        return;
      }

      // Show a success message to your customer
      // There's a risk of the customer closing the window before callback
      // execution. Set up a webhook or plugin to listen for the
      // payment_intent.succeeded event that handles any business critical
      // post-payment actions.
      const response = await serviceAPIClient.request<
        ConfirmStripeOrderMutation,
        ConfirmStripeOrderMutationVariables
      >(ConfirmStripeOrderDocument, {
        checkoutModel,
        paymentIntentId: paymentIntent.id,
      });

      const { success, orderId } =
        response.paymentProviders.stripe.confirmOrder;

      if (success) {
        onSuccess();
      } else {
        onError(new Error("Unknown"));
      }
    }
  };

  return (
    <Box as="form" css={{ width: "$full" }} onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              color: "#000",
              fontSize: "14px",
              fontFamily: "'Poppins', sans-serif",
              fontSmoothing: "antialiased",
            },
          },
        }}
      />

      <Spacer space={6} />

      <Button type="submit" css={{ width: "$full" }}>
        Pay
      </Button>
    </Box>
  );
};

export const StripePayment = ({ checkoutModel, onSuccess }: PaymentProps) => {
  const stripePaymentIntent = useQuery(
    "paymentIntent",
    () =>
      serviceAPIClient.request<
        StripePaymentIntentMutation,
        StripePaymentIntentMutationVariables
      >(StripePaymentIntentDocument, { checkoutModel }),
    { enabled: false }
  );

  useEffect(() => {
    stripePaymentIntent.refetch();
  }, []);

  const loading = <Typography variant="text">Loading...</Typography>;

  if (!stripePaymentIntent.data) {
    return loading;
  }

  const stripeClientSecret =
    stripePaymentIntent?.data?.paymentProviders?.stripe?.createPaymentIntent
      ?.client_secret;

  return (
    <StripeLoader loading={loading}>
      <Form
        stripeClientSecret={stripeClientSecret}
        checkoutModel={checkoutModel}
        onSuccess={onSuccess}
      />
    </StripeLoader>
  );
};

export const Stripe = ({ checkoutModel, onSuccess }: PaymentProps) => {
  return <StripePayment checkoutModel={checkoutModel} onSuccess={onSuccess} />;
};
