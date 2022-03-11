import { useBasket } from "@/components/basket";
import { Typography, Box, Spacer, Flex, Button } from "@/design-system";
import { Image } from "@crystallize/react-image";
import NextLink from "next/link";

function QuantityButton({ children, ...props }) {
  return (
    <Typography
      as="button"
      type="button"
      css={{
        appearance: "none",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        padding: "0 10px",
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}

const CartPage = () => {
  const basket = useBasket();

  return (
    <Box
      css={{
        width: "$content",
        margin: "50px auto",
        "@bp3": { width: "$full", padding: "0 $10" },
      }}
    >
      <Typography variant="heading" size={8}>
        Shopping Cart
      </Typography>
      <Spacer space={10} />
      {basket.cart.length > 0 ? (
        <Flex align="start" css={{ gap: "$10" }}>
          <Flex
            align="start"
            direction="column"
            css={{ width: "$content", gap: "$10" }}
          >
            {basket.cart.map((item, index) => (
              <Box
                key={index}
                variant="card"
                css={{ width: "$full", padding: "20px" }}
              >
                <Flex
                  css={{
                    gap: "30px",
                    "& img": {
                      objectFit: "contain",
                    },
                  }}
                >
                  <Image {...item.images[0]} width="100px" height="100px" />
                  <Flex direction="column" align="start" css={{ gap: "20px" }}>
                    <Typography variant="heading" size={5}>
                      {item.name}
                    </Typography>
                    <Typography css={{ color: "$price" }} size={4}>
                      $ {item.price.gross}
                    </Typography>
                    <Flex
                      css={{
                        gap: "5px",
                        border: "1px solid $border",
                        padding: "3px 0",
                      }}
                    >
                      <QuantityButton
                        onClick={() =>
                          basket.actions.decrementItem({
                            sku: item.sku,
                            path: item.path,
                          })
                        }
                      >
                        -
                      </QuantityButton>
                      <Typography>{item.quantity}</Typography>
                      <QuantityButton
                        onClick={() =>
                          basket.actions.incrementItem({
                            sku: item.sku,
                            path: item.path,
                          })
                        }
                      >
                        +
                      </QuantityButton>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Flex>
          <Box
            variant="card"
            css={{ width: "$content", maxWidth: "400px", padding: "50px" }}
          >
            <Flex direction="column" align="start" css={{ gap: "50px" }}>
              <Typography variant="heading" size={6}>
                Cart Total
              </Typography>
              <Flex justify="between" css={{ width: "$full" }}>
                <Typography size={5}>Sub Total</Typography>
                <Typography size={5}>${basket.total.gross}</Typography>
              </Flex>
              <Flex justify="between" css={{ width: "$full" }}>
                <Typography size={5}>Tax</Typography>
                <Typography size={5}>${basket.total.tax.percent}</Typography>
              </Flex>
              <Flex justify="between" css={{ width: "$full" }}>
                <Typography size={5} css={{ fontWeight: "700" }}>
                  Total
                </Typography>
                <Typography size={5} css={{ fontWeight: "700" }}>
                  ${basket.total.net}
                </Typography>
              </Flex>
              <NextLink href="/checkout">
                <Button css={{ width: "$full" }}>Checkout</Button>
              </NextLink>
            </Flex>
          </Box>
        </Flex>
      ) : (
        <Typography size={5}>Your shopping cart is empty.</Typography>
      )}
    </Box>
  );
};

export default CartPage;
