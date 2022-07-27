import * as React from "react";
import Layout from "../components/layout";
import {StaticImage} from "gatsby-plugin-image";

const IndexPage = () => {
	return (
		<Layout pageTitle="Home Page">
			<p>你好，世界！</p>
			{/* <StaticImage alt="be a hero" src="../images/images.jpeg"/> */}
		</Layout>
	)
}

export default IndexPage
