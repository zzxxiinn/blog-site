import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Nav from './nav'


export interface LayoutProps extends React.PropsWithChildren {
  pageTitle?: string,
}



const Article = styled.article`
  min-height: 80vh;
  padding: 5em 0;
`


const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site { siteMetadata { title } }
    }
  `)

  return (
    <Article>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <main className="container">
        <Nav />
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </Article>
  )
}

export default Layout
