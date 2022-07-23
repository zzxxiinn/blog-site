import type {GatsbyConfig} from "gatsby"

const config: GatsbyConfig = {
	siteMetadata: {
		siteUrl: `https://www.yourdomain.tld`,
		title: "Fish Pond",
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-image",
		"gatsby-plugin-sharp",
		"gatsby-plugin-stylus",
		"gatsby-plugin-mdx",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: `blog`,
				path: `${__dirname}/blog`
			}
		}, {
			resolve: `gatsby-plugin-emotion`,
			options: {
				// Accepts the following options, all of which are defined by `@emotion/babel-plugin` plugin.
				// The values for each key in this example are the defaults the plugin uses.
				sourceMap: true,
				autoLabel: "dev-only",
				labelFormat: `[local]`,
				cssPropOptimization: true,
			},
		},
	],
}

export default config
