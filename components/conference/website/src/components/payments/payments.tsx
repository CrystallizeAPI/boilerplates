import { useState } from "react";
import { Flex, Spacer, Button } from "@/design-system";

import { Stripe } from "./stripe";
import { PaymentProps } from "./types";

export const Payments = (props: PaymentProps) => {
  const [payment, setPayment] = useState("");

  return (
    <>
      <Flex css={{ gap: "$2" }}>
        <Button
          variant={payment === "stripe" ? "primary" : "secondary"}
          onClick={() => setPayment("stripe")}
          css={{width: "$full"}}
        >
          Pay with Stripe
        </Button>
      </Flex>

      {!!payment && <Spacer space={6} />}

      {payment === "stripe" && <Stripe {...props} />}
    </>
  );
};
