import * as React from "react";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";

import Layout from "../../components/layout";

interface BlogPostProps {
	data: {
		mdx: {
			frontmatter: {
				title: string,
				date: string
			},
			body: string
		}
	}
}

const BlogPost = ({data}: BlogPostProps) => {
	return (
		<Layout pageTitle="Super Cool Blog Posts">
			<p>{data.mdx.frontmatter.date}</p>
			<MDXRenderer>
				{data.mdx.body}
			</MDXRenderer>
		</Layout>
	)
}

export const query = graphql`
	query ($id: String) {
		mdx(id: {eq: $id}) {
			frontmatter {
				title
				date(formatString: "MMMM D, YYYY")
			}
			body
		}
	}
`

export default BlogPost
