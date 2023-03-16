import * as React from "react";
import Layout from "@components/layout";
import Seo from "@components/seo";
import { graphql } from "gatsby";
import { FC, PropsWithChildren } from "react";

interface QueryData {
  mdx: {
    frontmatter: {
      title: string;
      date: string;
    };
  };
}
interface BlogPostProps extends PropsWithChildren {
  data: QueryData;
}

const BlogPost: React.FC<BlogPostProps> = ({ data, children }) => {
  return (
    <Layout pageTitle="Super Cool Blog Posts">
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`;
export const Head: React.FC<BlogPostProps> = ({ data }) => (
  <Seo title={data.mdx.frontmatter.title} />
);

export default BlogPost;
