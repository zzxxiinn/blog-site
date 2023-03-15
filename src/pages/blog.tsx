import * as React from "react";
import Seo from "../components/seo";
import Layout from "@components/layout";
import { graphql } from "gatsby";

interface BlogProps {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          title: string;
          date: string;
        };
        id: string;
        excerpt: string;
      }[];
    };
  };
}

const BlogPage: React.FC<BlogProps> = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          title
          date(formatString: "MMMM DD, YYYY")
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
