/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import About from "../components/about"
import Divider from "../components/divider"
import {
  FirebaseProvider,
  UserSavedPostsProvider,
} from "../components/auth/context"

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
  return (
    <FirebaseProvider>
      <UserSavedPostsProvider>
        <Layout>
          <SEO title="Home" />
          <Hero />
          <About />
          <Divider />
          <PostList postData={data} />
        </Layout>
      </UserSavedPostsProvider>
    </FirebaseProvider>
  )
}

export default IndexPage
