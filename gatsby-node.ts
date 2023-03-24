import path from 'path'
import { GatsbyNode } from 'gatsby'
import { createFilePath } from "gatsby-source-filesystem";

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions
}) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@styles": path.resolve(__dirname, "src/styles")
      }
    }
  });
}


export const onCreateNode: GatsbyNode['onCreateNode'] = ({ node, actions: {createNodeField}, getNode }) => {
  if (node.internal.type === 'Mdx') {
    console.log(createFilePath({ node, getNode }))

    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    })
  }
}

// export const createPage: GatsbyNode['createPages'] = async ({ graphql, actions: { createPage } }) => {
//
// }
