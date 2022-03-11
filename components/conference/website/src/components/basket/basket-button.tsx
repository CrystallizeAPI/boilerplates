import { Box, CartIcon, IconButton } from "@/design-system";
import { useBasket } from "@/components/basket";
import NextLink from "next/link";

export const BasketButton = () => {
  const { totalQuantity } = useBasket();
  return (
    <NextLink href="/cart">
      <Box css={{ position: "relative" }}>
        <IconButton
          css={{
            ml: "auto",
            fontWeight: "bolder",
          }}
        >
          <CartIcon />
          <Box className="basket-quantity">{totalQuantity}</Box>
        </IconButton>
      </Box>
    </NextLink>
  );
};
