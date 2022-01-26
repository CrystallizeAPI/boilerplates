import NextLink from "next/link";
import { AllProductsQuery } from "@/crystallize/queries/allProducts.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { Image } from "@crystallize/react-image";
import { Box, Flex, Typography } from "@/design-system";

interface ProductsProps {
  products: AllProductsQuery["catalogue"];
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <Flex
      align="start"
      justify="start"
      wrap="wrap"
      css={{
        width: "$content",
        mx: "auto",
        gap: "$10",
        "@bp3": { width: "$full", padding: "0 $14" },
      }}
    >
      {products.children.map((product, index) => (
        <NextLink
          href={componentContent(product, "Product").path}
          key={index}
          passHref
        >
          <Box
            as="a"
            css={{
              boxShadow:
                "0px 0px 2px rgba(40, 41, 61, 0.04), 0px 4px 8px rgba(96, 97, 112, 0.16)",
              borderRadius: "12px",
              width: "320px",
              height: "350px",
              color: "inherit",
              textDecoration: "inherit",
              "@bp3": { width: "100%", height: "auto" },
            }}
          >
            <Box
              css={{
                height: "70%",
                figure: {
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                },
                img: {
                  width: "100%",
                  height: "100%",
                },
              }}
            >
              <Image
                {...componentContent(product, "Product").defaultVariant
                  .firstImage}
              />
            </Box>
            <Flex direction="column" css={{ gap: "10px", p: "20px" }}>
              <Typography size={4} css={{ fontWeight: "bold" }}>
                {componentContent(product, "Product").name}
              </Typography>
              <Typography size={4} css={{ color: "$price" }}>
                $ {componentContent(product, "Product").variants[0].price}
              </Typography>
            </Flex>
          </Box>
        </NextLink>
      ))}
    </Flex>
  );
};
