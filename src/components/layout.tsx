import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

export interface LayoutProps extends React.PropsWithChildren {
  pageTitle?: string,
}

interface RouteMap {
  name: string
  route: string
}

const BaseRouteMaps: RouteMap[] = [
  { name: 'Home', route: '/' },
  { name: 'Blog', route: '/blog' },
]

const Ul = styled.ul`
  display: flex;
`

const Li = styled.li`
  display: inline-block;
  margin-right: 8px;
`

const renderNav = () => (
  <nav>
    <Ul>
      {
        BaseRouteMaps.map(routeMap => (
          <Li key={routeMap.name}>
            <Link to={routeMap.route}>{routeMap.name}</Link>
          </Li>
        ))
      }
    </Ul>
  </nav>
)

const Layout = ({ pageTitle, children }: LayoutProps) => {
  const data = useStaticQuery(graphql`
    query {
      site { siteMetadata { title } }
    }
  `)

  return (
    <div>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>

      <main className="container">
        {renderNav()}
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
