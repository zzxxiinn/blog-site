import * as React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';

export interface LayoutProps extends React.PropsWithChildren {
	pageTitle?: string,
}

interface RouteMap {
	name: string
	route: string
}

const BaseRouteMaps: RouteMap[] = [
	{name: 'Home', route: '/'},
	{name: 'About', route: '/about'},
	{name: 'Blog', route: '/blog'},
]

const renderNav = () => (
	<nav>
		<ul>
			{
				BaseRouteMaps.map(routeMap => (
					<li key={routeMap.name}>
						<Link to={routeMap.route}>{routeMap.name}</Link>
					</li>
				))
			}
		</ul>
	</nav>
)

const Layout = ({pageTitle, children}: LayoutProps) => {
	const data = useStaticQuery(graphql`
		query {
			site { siteMetadata { title } }
		}
	`)

	return (
		<div>
			<title>{pageTitle} | {data.site.siteMetadata.title}</title>
			<header>{data.site.siteMetadata.title}</header>

			<main className="container">
				{renderNav()}
				<h1>{pageTitle}</h1>
				{children}
			</main>
		</div>
	)
}

export default Layout
