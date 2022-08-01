import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "@components/layout";
import Code from "@components/code";

interface BlogPostProps {
	data: {
		mdx: {
			frontmatter: {
				title: string,
				date: string,
				hero_image_alt: string,
				hero_image_credit_link: string,
				hero_image_credit_text: string,
				hero_image: any
			},
			body: string
		}
	}
}

const code: React.FC<React.PropsWithChildren> = ({ children }) => (<div>{ children}</div>)

const components = {
	code:code
}

const BlogPost = ({ data }: BlogPostProps) => {
	const image = getImage(data.mdx.frontmatter.hero_image)

	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>Post: {data.mdx.frontmatter.date}</p>
			<MDXProvider components={components}>
				<MDXRenderer>
					{data.mdx.body}
				</MDXRenderer>
			</MDXProvider>
		</Layout>
	)
}

export const query = graphql`
	query($id: String) {
		mdx(id: {eq: $id}) {
			body
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`

export default BlogPost
