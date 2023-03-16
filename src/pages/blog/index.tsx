import * as React from "react";
import Seo from "@components/seo";
import Layout from "@components/layout";
import { graphql, Link } from "gatsby";

interface BlogProps {
  data: {
    allMdx: {
      nodes: {
        frontmatter: {
          title: string;
          date: string;
          slug: string;
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
          <h2>
            <Link to={`/blog/${node.frontmatter.slug}`}>
              {node.frontmatter.title}
            </Link>
          </h2>
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
          date(formatString: "MMMM DD, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
