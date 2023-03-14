import * as React from "react";
import styled from "styled-components";
import Layout from "@components/layout";
import Nav from "@components/nav";

const Header = styled.header`
  width: 100%;
  text-align: center;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
  }
`;

const H1 = styled.h1`
  font-size: 7em;
  display: block;
  text-shadow: -0.1em 0.1em #ff5e5e, 0.05em -0.05em 0em #5e5eff;
`;

const IndexPage = () => {
  return (
    <Layout header={false}>
      <Header>
        <H1>你好，世界！</H1>
        <Nav />
      </Header>
    </Layout>
  );
};

export default IndexPage;
