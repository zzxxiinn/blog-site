import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Seo from "@components/seo";
import Layout from "@components/layout";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Layout pageTitle={`Welcome to ${data.site.siteMetadata.title}.`}>
      hello world
    </Layout>
  );
};

export const Head = () => <Seo title="Home Page" />;

export default IndexPage;
