import * as React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';


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



const Nav: React.FC = () => (
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


export default Nav
