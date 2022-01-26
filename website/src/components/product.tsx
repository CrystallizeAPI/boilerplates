import { componentContent } from "@/crystallize/utils/componentContent";
import { Image } from "@crystallize/react-image";
import { Box, Flex, Typography, Button } from "@/design-system";
import { ProductQuery } from "@/crystallize/queries/product.generated";
import { useBasket } from "@/components/basket";
import { ContentTransformer } from "@crystallize/react-content-transformer";
interface ProductsProps {
  product: ProductQuery["product"];
}

export const Product = ({ product }: ProductsProps) => {
  const basket = useBasket();
  let item = componentContent(product, "Product");
  let priceVariants = item.variants[0].priceVariants;

  const buy = (priceVariantIdentifier) => {
    basket?.actions?.addItem({
      id: item.id,
      sku: item.variants[0].sku,
      path: item.path,
      priceVariantIdentifier: priceVariantIdentifier,
      stock: item.variants[0].stock
    });
  };

  return (
    <Flex
      direction={{ "@initial": "row", "@bp3": "column" }}
      align={{ "@initial": "start", "@bp3": "center" }}
      justify="start"
      wrap="wrap"
      css={{
        width: "$content",
        mx: "auto",
        gap: "$10",
        "@bp3": { width: "$full" },
      }}
    >
      <Box css={{ width: "50%", img: { width: "100%", objectFit: "contain" } }}>
        <Image {...item.defaultVariant.firstImage} />
      </Box>
      <Flex direction="column" css={{ gap: "20px", maxWidth: "450px" }}>
        <Typography variant="heading" size={9}>
          {item.name}
        </Typography>
        <Typography size={4} css={{ color: "$price" }}>
          $ {item.variants[0].price}
        </Typography>
        <Typography css={{ textAlign: "center" }}>
          <Typography variant="text" size="3" css={{ lineHeight: "$relaxed" }}>
            <ContentTransformer
              json={
                componentContent(product.component.content, "RichTextContent")
                  ?.json as [any]
              }
            />
          </Typography>
        </Typography>
        <Typography size={4}>
          Stock available: {item.variants[0].stock}
        </Typography>
        {priceVariants.length > 1 ? (
          <Flex css={{ gap: "$2" }}>
            <Button onClick={() => buy("default")}>Buy Ticket</Button>
            <Button onClick={() => buy("usd-sales")} variant="secondary">
              Early Bird Ticket (${priceVariants[1].price})
            </Button>
          </Flex>
        ) : (
          <Button onClick={() => buy("default")}>Add to Cart</Button>
        )}
      </Flex>
    </Flex>
  );
};
