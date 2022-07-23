import * as React from "react"
import type {GatsbyBrowser} from "gatsby"

import "./src/styles/typography.css"
import "./src/styles/global.css"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element,}) => {
	return (
		<div>
			<h1>Hello World</h1>
			{element}
		</div>
	)
}
