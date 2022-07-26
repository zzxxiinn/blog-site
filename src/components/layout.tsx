import * as React from 'react';
import {Link, useStaticQuery, graphql} from 'gatsby';
import {css} from '@emotion/css'
import './layout.styl'

export interface LayoutProps extends React.PropsWithChildren {
	pageTitle?: string,
}

interface RouteMap {
	name: string
	route: string
}

const BaseRouteMaps: RouteMap[] = [
	{name: 'Blog', route: '/'},
]

const renderNav = () => (
	<nav>
		<ul className={css` display: flex;list-style: none;padding-left: 0; `}>
			{
				BaseRouteMaps.map(routeMap => (
					<li key={routeMap.name} className={css` padding-left: 2rem; color: black; `}>
						<Link to={routeMap.route} className={css` color: black; `}>{routeMap.name}</Link>
					</li>
				))
			}
		</ul>
	</nav>
)

const Layout = ({pageTitle, children}: LayoutProps) => {
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<div className={css`
			margin: auto;
			max-width: 500px;
		`}>
			<title>{pageTitle} | {data.site.siteMetadata.title}</title>
			<header className={css`
				font-size: 3rem;
				color: gray;
				font-weight: 700;
				margin: 3rem 0;
			`}>{data.site.siteMetadata.title}</header>

			<main>
				<h1 className={css`
					color: rebeccapurple;
				`}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	)
}

export default Layout
