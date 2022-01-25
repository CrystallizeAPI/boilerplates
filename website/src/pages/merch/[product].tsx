import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { catalogueClient } from "@/crystallize/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import {
  AllProductsQuery,
  AllProductsDocument,
} from "@/crystallize/queries/allProducts.generated";
import {
  ProductDocument,
  ProductQuery,
} from "@/crystallize/queries/product.generated";

import { Box } from "@/design-system";
import { Product } from "@/components/product";

type ProductPageProps = ProductQuery & { path: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await catalogueClient.request<AllProductsQuery>(
    normalizeDocumentNode(AllProductsDocument)
  );
  return {
    paths:
      data?.catalogue?.children?.map((product) => ({
        params: { product: product.path },
      })) || [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<ProductPageProps> = async ({
  params,
}) => {
  const path = `/merch/${params.product}`;
  const data = await catalogueClient.request<ProductQuery>(
    normalizeDocumentNode(ProductDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const ProductPage: NextPage<ProductPageProps> = ({ product }) => {
  if (!product) return null;

  return (
    <Box
      css={{
        mx: "auto",
        mt: "100px",
      }}
    >
      <Product product={product} />
    </Box>
  );
};

export default ProductPage;
