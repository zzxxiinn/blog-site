import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Nav from "./nav";
import { Suspense } from "react";

const BackgroundDoodle = React.lazy(
  () => import("../components/background-doodle")
);

export interface LayoutProps extends React.PropsWithChildren {
  pageTitle?: string;
  header?: boolean;
}

const Article = styled.article`
  min-height: 80vh;
  padding: 5em 0;
`;

const Layout = ({ pageTitle, children, header = true }: LayoutProps) => {
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
    <>
      <Suspense fallback={<div className="doodle-background" />}>
        <BackgroundDoodle />
      </Suspense>

      <Article>
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>

        <main className="container">
          {header && <Nav />}
          <h1>{pageTitle}</h1>
          {children}
        </main>
      </Article>
    </>
  );
};

export default Layout;
