import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "@components/layout";
import HighlightCode from "@components/highlight-code";

interface BlogPostProps {
  data: {
    mdx: {
      frontmatter: {
        title: string,
        date: string,
        hero_image_alt: string,
        hero_image_credit_link: string,
        hero_image_credit_text: string,
        hero_image: any,
        embeddedImagesLocal: any
      },
      body: string
    }
  }
}

const components = {
  pre: HighlightCode
}

const BlogPost = ({ data: { mdx: { frontmatter, body } } }: BlogPostProps) => {
  const image = getImage(frontmatter.hero_image)
  console.log(frontmatter.embeddedImagesLocal)
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>Post: {frontmatter.date}</p>
      <MDXProvider components={components}>
        <MDXRenderer localImages={frontmatter.embeddedImagesLocal}>
          {body}
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
        date(formatString: "MMMM DD, YYYY"),
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost
