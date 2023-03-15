import * as React from "react";
import Seo from "@components/seo";
import Layout from "@components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me">
      <p>My cool posts will go in here</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About me" />;

export default AboutPage;
