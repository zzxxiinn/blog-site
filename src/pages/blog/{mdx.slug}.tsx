import * as React from "react";
import {graphql} from "gatsby";
import {MDXRenderer} from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "../../components/layout";
import {IGatsbyImageData} from "gatsby-plugin-image/dist/src/components/gatsby-image.browser";

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

const BlogPost = ({data}: BlogPostProps) => {
	const image= getImage(data.mdx.frontmatter.hero_image)

	return (
		<Layout pageTitle="Super Cool Blog Posts">
			<p>Post: {data.mdx.frontmatter.date}</p>
			{
				(image !== undefined) && (
					<>
						<GatsbyImage
							image={image}
							alt={data.mdx.frontmatter.hero_image_alt}
						/>
						<p>
							Photo Credit:{" "}
							<a href={data.mdx.frontmatter.hero_image_credit_link}>
								{data.mdx.frontmatter.hero_image_credit_text}
							</a>
						</p>
					</>
				)
			}
			<MDXRenderer>
				{data.mdx.body}
			</MDXRenderer>
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
				hero_image_alt
				hero_image_credit_link
				hero_image_credit_text
				hero_image {
					childImageSharp {
						gatsbyImageData
					}
				}
			}
		}
	}
`

export default BlogPost
