import { GetStaticProps, NextPage } from "next";
// import { catalogueClient } from "@/crystallize/clients";
import { catalogueClient } from "@/clients";
import { normalizeDocumentNode } from "@/crystallize/utils/normalizeDocumentNode";
import { BlogDocument, BlogQuery } from "@/crystallize/queries/blog.generated";
import { componentContent } from "@/crystallize/utils/componentContent";
import { ContentTransformer } from "@crystallize/react-content-transformer";

import { Featured } from "@/components/featured";
import { BlogCategory } from "@/components/blog-category";

import { Flex, Typography, Spacer, Box } from "@/design-system";
import { Newsletter } from "@/components/newsletter";

type BlogPageProps = BlogQuery & { path: string };

export const getStaticProps: GetStaticProps<BlogPageProps> = async () => {
  const path = "/blog";
  const data = await catalogueClient.request<BlogQuery>(
    normalizeDocumentNode(BlogDocument),
    { path }
  );
  return { props: { ...data, path } };
};

export const BlogPage: NextPage<BlogPageProps> = ({ blog }) => {
  const description =
    "Cras id nulla fringilla, tincidunt tellus eget, euismod leo. Ut finibus.";

  return (
    <>
      <Spacer space={{ "@initial": 11, "@bp1": 32 }} />

      <Flex justify="center">
        <Typography
          as="h3"
          variant="heading"
          size={{
            "@initial": 7,
            "@bp1": 11,
          }}
        >
          {componentContent(blog.title.content, "SingleLineContent")?.text}
        </Typography>
      </Flex>

      <Spacer space={{ "@initial": 11, "@bp1": 14 }} />

      <Flex justify="center">
        <Typography size={4} css={{ textAlign: "center" }}>
          <ContentTransformer
            json={
              componentContent(blog.brief.content, "RichTextContent")?.json as [
                any
              ]
            }
          />
        </Typography>
      </Flex>

      <Spacer space={{ "@initial": 11, "@bp1": 14 }} />

      <Box css={{ padding: "20px 0", maxWidth: "$content", mx: "auto" }}>
        <Featured featured={blog.featured} />
      </Box>

      <Spacer space={{ "@initial": 11, "@bp1": 14 }} />

      {blog.categories?.map((category) => (
        <Box key={category.path} css={{ py: "$7" }}>
          <BlogCategory category={category} />

          <Spacer space={{ "@initial": 11, "@bp1": 14 }} />
        </Box>
      ))}

      <Newsletter description={description} />
    </>
  );
};

export default BlogPage;
