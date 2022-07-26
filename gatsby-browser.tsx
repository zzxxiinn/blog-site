import * as React from "react"
import type {GatsbyBrowser} from "gatsby"

import 'css-doodle'

import "./src/styles/typography.css"
import "./src/styles/global.css"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element}) => {
	return (
		<div>
			{element}
		</div>
	)
}
