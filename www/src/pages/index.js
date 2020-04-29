/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"
import { graphql } from "gatsby"
import Hero from "../components/hero"
import About from "../components/about"
import Divider from "../components/divider"

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
          category {
            name
          }
          images {
            alt
            caption
            asset {
              fluid {
                ...GatsbySanityImageFluid
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
    <Layout>
      <SEO title="Home" />
      <Hero />
      <About />
      <Divider />
      <PostList postData={data} />
    </Layout>
  )
}

export default IndexPage
