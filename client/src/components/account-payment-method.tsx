import { FormEventHandler, useState, useEffect } from "react";
import { useMutation, useQueryClient } from "react-query";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { serviceAPIClient } from "@/clients";
import {
  UpdatePaymentMethodDocument,
  UpdatePaymentMethodMutation,
  UpdatePaymentMethodMutationVariables,
} from "@/service-api/update-payment-method.generated";
import { Box, Flex, Spacer, Button, Typography, global } from "@/design-system";
import { StripeLoader } from "@/components/stripe-loader";

interface AccountPaymentMethodProps {
  subscription: any;
  paymentMethod: any;
}

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

export function useUpdatePaymentMethod() {
  const queryClient = useQueryClient();
  return useMutation(
    (input: UpdatePaymentMethodMutationVariables) =>
      serviceAPIClient.request<
        UpdatePaymentMethodMutation,
        UpdatePaymentMethodMutationVariables
      >(UpdatePaymentMethodDocument, input),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("account");
      },
    }
  );
}

interface FormProps {
  subscriptionId: string;
  close: () => void;
}

export const Form = ({ subscriptionId, close }: FormProps) => {
  stripeStyles();

  const updatePaymentMethod = useUpdatePaymentMethod();

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (stripe) {
      stripe.elements({
        fonts: [{ cssSrc: "https://fonts.googleapis.com/css?family=Poppins" }],
      });
    }
  }, [stripe]);

  useEffect(() => {
    if (updatePaymentMethod.isSuccess) {
      close();
    }
  }, [updatePaymentMethod.isSuccess]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    go();

    async function go() {
      if (!stripe || !elements) {
        setTimeout(go, 100);
        return;
      }

      const cardElement = elements.getElement(CardElement);
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      if (error) {
        console.error(error);
      }

      updatePaymentMethod.mutate({
        id: subscriptionId,
        paymentMethodId: paymentMethod.id,
      });
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

      <Flex direction="rowReverse" justify="start">
        <Button
          variant="primary"
          size="sm"
          type="submit"
          disabled={updatePaymentMethod.isLoading}
        >
          {updatePaymentMethod.isLoading ? "Saving" : "Save"}
        </Button>

        <Spacer direction="horizontal" space={4} />

        <Button variant="secondary" size="sm" onClick={close}>
          Close
        </Button>
      </Flex>
    </Box>
  );
};

const StripePaymentMethod = ({
  paymentMethod,
  subscription,
}: AccountPaymentMethodProps) => {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      {!isEditing ? (
        <>
          <Flex>
            <Typography size={3}>
              <Box as="span" css={{ textTransform: "capitalize" }}>
                {paymentMethod.card.brand}
              </Box>{" "}
              {paymentMethod.card.last4}
            </Typography>

            <Spacer direction="horizontal" space={4} />

            <Typography size={3}>
              {paymentMethod.card.exp_month}/{paymentMethod.card.exp_year}
            </Typography>
          </Flex>

          <Spacer space={6} />

          <Button
            variant="secondary"
            size="sm"
            onClick={() => setIsEditing(true)}
          >
            Change
          </Button>
        </>
      ) : (
        <StripeLoader loading={<Typography>Loading...</Typography>}>
          <Form
            subscriptionId={subscription.id}
            close={() => setIsEditing(false)}
          />
        </StripeLoader>
      )}
    </>
  );
};

const PaymentMethod = (props: AccountPaymentMethodProps) => {
  switch (props.paymentMethod.provider) {
    case "stripe":
      return <StripePaymentMethod {...props} />;
    case "custom":
      const companyName = props.paymentMethod.properties.find(
        (p) => p.property === "companyName"
      )?.value;
      return <Typography size={3}>Paid by {companyName} via Tillit</Typography>;
    default:
      return null;
  }
};

export const AccountPaymentMethod = (props: AccountPaymentMethodProps) => {
  return (
    <Box css={{ p: "$12", borderRadius: "$3xl", boxShadow: "$card" }}>
      <Typography as="h3" variant="heading" size={6}>
        Payment Method
      </Typography>

      <Spacer space={10} />

      <PaymentMethod {...props} />
    </Box>
  );
};
