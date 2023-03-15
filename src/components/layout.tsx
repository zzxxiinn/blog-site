import * as React from "react";
import { Container, Frame, Glow, Output, Scanline } from "@components/styled";
import { graphql, Link, useStaticQuery } from "gatsby";
import { PropsWithChildren } from "react";

interface PageProps extends PropsWithChildren {
  pageTitle: string;
}

const IndexPage: React.FC<PageProps> = ({ pageTitle, children }) => {
  return (
    <Container>
      <Frame>
        <Output>
          <h1>{pageTitle}</h1>

          <nav>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
            </ol>
          </nav>

          {children}
        </Output>
        <Scanline />
        <Glow />
      </Frame>
    </Container>
  );
};

export default IndexPage;
