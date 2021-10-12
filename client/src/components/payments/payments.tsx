import { useState } from "react";
import { Flex, Spacer, Button } from "@/design-system";

import { Stripe } from "./stripe";
import { Tillit } from "./tillit";
import { PaymentProps } from "./types";

export const Payments = (props: PaymentProps) => {
  const [payment, setPayment] = useState("");

  return (
    <>
      <Flex css={{ gap: "$2" }}>
        <Button
          variant={payment === "stripe" ? "primary" : "secondary"}
          onClick={() => setPayment("stripe")}
        >
          Stripe
        </Button>
        <Button
          variant={payment === "tillit" ? "primary" : "secondary"}
          onClick={() => setPayment("tillit")}
        >
          Tillit
        </Button>
      </Flex>

      {!!payment && <Spacer space={6} />}

      {payment === "stripe" && <Stripe {...props} />}
      {payment === "tillit" && <Tillit {...props} />}
    </>
  );
};
