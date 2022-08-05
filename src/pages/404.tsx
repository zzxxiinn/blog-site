import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  fontSize: '64px',
}

const paragraphStyles = {
  fontSize: '24px',
  marginBottom: 48,
  lineHeight: 1,
}

const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Not found</title>
      <h1 style={headingStyles}>Page not found</h1>
      <h3 style={paragraphStyles}>
        Sorry <span role="img" aria-label="Pensive emoji"> 😔 </span>we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br /> Try creating a page in <code style={codeStyles}>src/pages/</code>. <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </h3>
    </main>
  )
}

export default NotFoundPage
