import * as React from "react";
import {Link} from "gatsby";

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


export interface LayoutProps extends React.PropsWithChildren {
	pageTitle?: string,
}


const Layout = ({pageTitle, children}: LayoutProps) => {
	return (
		<div style={containerStyles}>
			<title>{pageTitle}</title>
			<nav>
				<ul style={navLinksStyles}>
					<li style={navLinkItemStyles}>
						<Link to="/" style={navLinkTextStyles}>Home</Link>
					</li>
					<li style={navLinkItemStyles}>
						<Link to="/about" style={navLinkTextStyles}>About</Link>
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
