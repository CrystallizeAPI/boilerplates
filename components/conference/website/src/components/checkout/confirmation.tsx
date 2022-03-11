import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useBasket } from "@/components/basket";
import { Box, Flex, Spacer, Typography } from "@/design-system";

export default function Confirmation({ order, success }) {
  const basket = useBasket();

  if (success) {
    basket.actions.empty();
  }

  useEffect(() => {
    if (!order) {
      const t = setTimeout(() => window.location.reload(), 5000);

      return () => clearTimeout(t);
    }
  }, [order]);

  if (!order) {
    return <p>Loading...</p>;
  }

  const cart = order.cart.map((item) => ({
    ...item,
    image: {
      url: item.imageUrl,
    },
  }));

  const { total } = order;

  return (
    <Box
      variant="card"
      css={{
        width: "$auth",
        mx: "auto",
        mt: "80px",
        padding: "50px",
        "@bp3": { width: "$full" },
      }}
    >
      <Flex direction="column" align="start" css={{ gap: "$6" }}>
        <Typography size="7" css={{ fontWeight: "bold" }}>
          Order Confirmation
        </Typography>
        <Typography size="4" css={{ lineHeight: "$relaxed" }}>
          We’ve received your order #{order.id}.
        </Typography>
        <Flex
          direction="column"
          align="start"
          css={{
            gap: "20px",
            width: "$full",
            padding: "30px 20px",
            maxWidth: "700px",
          }}
        >
          {cart.map((item) => {
            return (
              <Flex
                key={item.name}
                justify="between"
                css={{
                  width: "$full",
                  "&:nth-child(n-1)": {
                    borderBottom: "1px solid $colors$border",
                    pb: "20px",
                  },
                }}
              >
                <Flex css={{ gap: "15px" }}>
                  <Typography size="3" css={{ fontWeight: "bold" }}>
                    {item.name} x {item.quantity}
                  </Typography>
                </Flex>
                <Typography size="3" css={{ fontWeight: "bold" }}>
                  ${item.price.gross}
                </Typography>
              </Flex>
            );
          })}
          <Spacer space={4} />
          <Flex
            direction="column"
            align="end"
            css={{ width: "$full", gap: "20px" }}
          >
            <Flex justify="between" css={{ width: "30%" }}>
              <Typography size="3">Subtotal</Typography>
              <Typography size="3">${total.gross}</Typography>
            </Flex>
            <Flex justify="between" css={{ width: "30%" }}>
              <Typography size="3">Tax</Typography>
              <Typography size="3">${total.net - total.gross}</Typography>
            </Flex>
            <Flex justify="between" css={{ width: "30%" }}>
              <Typography size="3" css={{ fontWeight: "bold" }}>
                Total
              </Typography>
              <Typography size="3" css={{ fontWeight: "bold" }}>
                ${total.net}
              </Typography>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
