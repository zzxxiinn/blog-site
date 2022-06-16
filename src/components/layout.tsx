import * as React from "react";
import {Link, useStaticQuery, graphql} from "gatsby";


const containerStyles = {
	margin: 'auto',
	maxWidth: '500px',
	fontFamily: 'sans-serif'
}

const headingStyles = {
	color: 'rebeccapurple'
}

const navLinksStyles = {
	display: 'flex',
	listStyle: 'none',
	paddingLeft: 0
}

const navLinkItemStyles = {
	paddingLeft: '2rem',
	color: 'black'
}

const navLinkTextStyles = {
	color: 'black'
}

const siteTitle = {
	fontSize: '3rem',
	color: 'gray',
	fontWeight: 700,
	margin: '3rem 0'
}


export interface LayoutProps extends React.PropsWithChildren {
	pageTitle?: string,
}


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
		<div style={containerStyles}>
			<title>{pageTitle} | {data.site.siteMetadata.title}</title>
			<header style={siteTitle}>{data.site.siteMetadata.title}</header>
			<nav>
				<ul style={navLinksStyles}>
					<li style={navLinkItemStyles}>
						<Link to="/" style={navLinkTextStyles}>Home</Link>
					</li>
					<li style={navLinkItemStyles}>
						<Link to="/about" style={navLinkTextStyles}>About</Link>
					</li>
					<li style={navLinkItemStyles}>
						<Link to="/blog" style={navLinkTextStyles}>Blog</Link>
					</li>
				</ul>
			</nav>
			<main>
				<h1 style={headingStyles}>{pageTitle}</h1>
				{children}
			</main>
		</div>
	)
}

export default Layout
