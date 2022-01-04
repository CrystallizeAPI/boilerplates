import { GetStaticProps, NextPage } from "next";
import { catalogueClient } from "@/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { Products } from "@/components/products";
import { Box, Spacer, Typography } from "@/design-system";
import { AllProductsDocument, AllProductsQuery } from "@/crystallize/queries/allProducts.generated";

type MerchPageProps = AllProductsQuery;

export const getStaticProps: GetStaticProps<MerchPageProps> = async () => {
  const data = await catalogueClient.request<AllProductsQuery>(
    normalizeDocumentNode(AllProductsDocument),
  );
  return { props: { ...data } };
};

export const MerchPage: NextPage<MerchPageProps> = ({ catalogue }) => {
  return (
    <Box css={{ width: "$full", mx: "0 auto", textAlign: "center" }}>
        <Spacer space={9}/>
        <Typography variant="heading" size={8}>Intergalactic Merch</Typography>
        <Spacer space={20}/>
        <Products products={catalogue}/>
    </Box>
  );
};

export default MerchPage;
