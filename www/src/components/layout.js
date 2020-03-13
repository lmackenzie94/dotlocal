/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "normalize.css"
import Header from "./header"
import Footer from "./footer"

// needed to avoid icon flash on page load
config.autoAddCss = false

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Global
        styles={theme => ({
          // to push footer down on 404 pages
          "#gatsby-focus-wrapper": {
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          },
          "body::-webkit-scrollbar": {
            width: "0.75rem",
          },
          "body::-webkit-scrollbar-track": {
            boxShadow: "inset 1px 0 0px rgba(0, 0, 0, 0.1)",
            backgroundColor: "lightgray",
          },
          "body::-webkit-scrollbar-thumb": {
            backgroundColor: theme.colors.red,
          },
        })}
      />
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* flex: 1 to keep footer at bottom of page */}
      <main sx={{ flex: 1 }}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
