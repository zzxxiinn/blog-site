import * as React from "react"
import type {GatsbyBrowser} from "gatsby"

import "terminal.css"

import "./src/styles/typography.css"
import "./src/styles/global.css"

import Doodle from "./src/components/doodle"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element}) => {
	return (
		<>
			<div className="index-doodle-wraper">
				<Doodle rule={`
					@grid: 1 / 100vw 100vh;
					background-color: #0a0c27;
					background-size: 200px 200px;
					background-image: @doodle(
						@grid: 6 / 100%;
						@size: 4px;
						font-size: 4px;
						color: hsl(@r240, 30%, 50%);
						box-shadow: @m3x5(
							calc(4em - @nx * 1em) calc(@ny * 1em)
								@p(@m3(currentColor), @m2(#0000)),
							calc(2em + @nx * 1em) calc(@ny * 1em)
								@lp
						);
					);
				`}/>
			</div>
			<div style={{ backgroundColor: '#eee' }}>
				{element}
			</div>
		</>
	)
}
