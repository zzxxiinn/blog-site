import React, { Suspense } from "react"
import type { GatsbyBrowser } from "gatsby"

import "terminal.css"
import "./src/styles/typography.min.css"
import "./src/styles/main.styl"

const BackgroundDoodle = React.lazy(() => import('./src/components/background-doodle'))

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({ element }) => {

  return (
    <>
      <Suspense fallback={<div className="doodle-background" />}>
        <BackgroundDoodle />
      </Suspense>
      <main className="main-content-wrapper">{element}</main>
    </>
  )
}
