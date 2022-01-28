import { GetStaticProps, GetStaticPaths, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
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
import { componentContent } from "@/crystallize/utils/componentContent";
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

  const { asPath } = useRouter();
  let siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`
  

  return (
    <>
      <Head>
        <title>{componentContent(product, "Product").name}</title>
        <meta
          name="description"
          content={componentContent(
            product.component.content,
            "RichTextContent"
          )?.plainText.toString()}
        ></meta>
        <meta
          property="og:image"
          content={
            componentContent(product, "Product").defaultVariant.firstImage.url
          }
        />
        <link href={`${siteUrl}${asPath}`} rel="canonical" />
      </Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org/",
            "@type": "Product",
            name: componentContent(product, "Product").name,
            image: [
              componentContent(product, "Product").defaultVariant.firstImage
                .url,
            ],
            description: componentContent(
              product.component.content,
              "RichTextContent"
            )?.plainText,
            sku: componentContent(product, "Product").variants[0].sku,
            offers: {
              "@type": "Offer",
              url: componentContent(product, "Product").path,
              priceCurrency: "USD",
              price: componentContent(product, "Product").variants[0].price,
              priceValidUntil: "2022-11-20",
              itemCondition: "https://schema.org/UsedCondition",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
      <Box
        css={{
          mx: "auto",
          mt: "100px",
        }}
      >
        <Product product={product} />
      </Box>
    </>
  );
};

export default ProductPage;
