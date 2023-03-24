import * as React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Layout from "@components/layout";
import HighlightCode from "@components/highlight-code";

interface BlogPostProps extends React.PropsWithChildren{
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
      }
    }
  }
}

const components = {
  pre: HighlightCode
}

const BlogPost = ({ data: { mdx: { frontmatter } }, children }: BlogPostProps) => {
  const image = getImage(frontmatter.hero_image)
  console.log(frontmatter.embeddedImagesLocal)
  return (
    <Layout pageTitle={frontmatter.title}>
      <p>Post: {frontmatter.date}</p>
      <MDXProvider components={components}>
        { children }
      </MDXProvider>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
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
