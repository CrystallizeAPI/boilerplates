import { useState, useEffect } from "react";
import { Box, Flex, Spacer, TextField, Typography } from "@/design-system";
import { Payments } from "@/components/payments";
import { CheckoutModelInput } from "@/service-api/types.generated";
import { useRouter } from 'next/router';
import { useBasket } from "@/components/basket";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const basket = useBasket();

  function getURL(path: string) {
    if (typeof window === "undefined") return "";
    return `${location?.protocol}//${location?.host}${path}`;
  }

  const checkoutModel: CheckoutModelInput = {
    basketModel: basket.basketModel,
    customer: { firstName, lastName, addresses: [{ type: "billing", email }] },
    confirmationURL: getURL(`/confirmation/{crystallizeOrderId}?emptyBasket`),
    checkoutURL: getURL(`/checkout`),
    termsURL: getURL(`/terms`),
  };

  return (
    <>
      <Spacer space="20" />
      <Box
        variant="card"
        css={{
          width: "$auth",
          mx: "auto",
          padding: "50px",
          "@bp3": { width: "$full" },
        }}
      >
        <Box as="form" onSubmit={(e) => e.preventDefault()}>
          <Typography as="h1" variant="heading" size={8}>
            Checkout
          </Typography>
          <Spacer space="14" />
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
            type="email"
            required
            cssForWrapper={{ width: "$full" }}
            value={email}
            onChange={(e) => setEmail(e.currentTarget.value)}
          />

          <Spacer space={5} />
        </Box>
        <Payments
          checkoutModel={checkoutModel}
          onSuccess={() => console.log("success")}
          onError={() => {}}
        />
      </Box>
    </>
  );
};

export default Checkout;
