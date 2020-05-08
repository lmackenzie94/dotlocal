/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import About from "../components/about"
import Divider from "../components/divider"
import { useFirebase } from "gatsby-plugin-firebase"
import { getUser, isLoggedIn, logout } from "../utils/auth"
import { FirebaseProvider } from "../components/auth/context"

export const query = graphql`
  {
    posts: allSanityPost(sort: { order: DESC, fields: _createdAt }) {
      edges {
        node {
          id
          _createdAt(formatString: "MMMM D, YYYY")
          title
          slug {
            current
          }
          author {
            name
          }
          price
          locations
          goodFor
          description
          approxBill
          category {
            name
          }
          images {
            alt
            caption
            asset {
              fluid {
                ...GatsbySanityImageFluid_noBase64
              }
            }
            hotspot {
              x
              y
            }
          }
        }
      }
    }
    categories: allSanityCategory {
      edges {
        node {
          name
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  // const [firebase, setFirebase] = useState()

  // useFirebase(fb => {
  //   setFirebase(fb)
  //   firebase
  //     .database()
  //     .ref("users/tXbGO1TKoPfXXE0O3b7JI48hPc52")
  //     .set({ name: "Mike", age: 33 })

  //   firebase
  //     .database()
  //     .ref("users/tXbGO1TKoPfXXE0O3b7JI48hPc52")
  //     .once("value")
  //     .then(res => console.log(res.val()))
  // }, [])

  // const { displayName, uid } = getUser()
  // console.log(displayName, uid)
  return (
    <FirebaseProvider>
      <Layout>
        <SEO title="Home" />
        <Hero />
        <About />
        <Divider />
        <PostList postData={data} />
      </Layout>
    </FirebaseProvider>
  )
}

export default IndexPage
