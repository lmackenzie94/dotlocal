/** @jsx jsx */
import React, { useEffect, useContext } from "react"
import { jsx } from "theme-ui"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Global } from "@emotion/core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { config } from "@fortawesome/fontawesome-svg-core"
import "normalize.css"
import "../styles/global.css"
import Header from "./header"
import Footer from "./footer"
import {
  UserSavedPostsContext,
  FirebaseContext,
  UserContext,
} from "./auth/context"
import Helmet from "react-helmet"

// needed to avoid icon flash on page load
config.autoAddCss = false

const Layout = ({ children }) => {
  const site = useStaticQuery(
    graphql`
      query {
        settings: sanitySettings {
          siteTitle
        }
      }
    `
  )
  const [firebase] = useContext(FirebaseContext)
  const [, setSavedPosts] = useContext(UserSavedPostsContext)
  const user = useContext(UserContext)

  useEffect(() => {
    if (firebase) {
      firebase
        .database()
        .ref(`users/${user.uid}/savedPosts`)
        .on("value", snapshot => {
          if (snapshot.val() !== null) {
            const savedPosts = Object.keys(snapshot.val())
            console.log("Saved Posts", savedPosts)
            setSavedPosts(savedPosts)
          } else {
            console.log("No saved posts")
          }
        })
    } else {
      console.log("Firebase undefined fam!")
    }
  }, [firebase, user, setSavedPosts])

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      </Helmet>
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
      <Header siteTitle={site.settings.siteTitle} />
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
