import * as React from "react"
import type { GatsbyBrowser } from "gatsby"

import "terminal.css"

import "./src/styles/typography.css"
import "./src/styles/main.styl"

import Doodle from "./src/components/doodle"


const doodleWrapperStyle: React.CSSProperties = {
	position: 'absolute',
	left: '0px',
	top: '0px',
	width: '100%',
	height: '100%'
}

const mainWrapperStyle: React.CSSProperties = {
	position: "relative",
	width: '100vw',
	height: '100vh',
	overflow: 'scroll',
	overflowX: 'auto'
}

const pageWrapperStyle: React.CSSProperties = {
	position: "relative",
	width: '100vw',
	height: '100vh'
}


export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {

	return (
		<div style={pageWrapperStyle}>
			<div style={doodleWrapperStyle}>
				{/* <Doodle rule={`
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
				`} /> */}
			</div>
			<div style={mainWrapperStyle}>{element}</div>
		</div>
	)
}
