import * as React from "react";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import {MDXProvider} from "@mdx-js/react"
import {GatsbyImage, getImage} from 'gatsby-plugin-image'

import Layout from "../../components/layout";

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

const MyH1: React.FC = props => <h1 style={{color: "tomato"}} {...props} />

const components = {
	h1: MyH1,
}


const BlogPost = ({data}: BlogPostProps) => {
	const image = getImage(data.mdx.frontmatter.hero_image)

	return (
		<Layout pageTitle={data.mdx.frontmatter.title}>
			<p>Post: {data.mdx.frontmatter.date}</p>
			{
				(image !== undefined) && (
					<>
						<GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
						<p>
							Photo Credit:{" "}
							<a href={data.mdx.frontmatter.hero_image_credit_link}>
								{data.mdx.frontmatter.hero_image_credit_text}
							</a>
						</p>
					</>
				)
			}
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
