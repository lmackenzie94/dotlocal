/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postlist"
import { graphql } from "gatsby"
import { Wrapper, Section } from "../system"
import wave from "../images/wave.svg"

export const query = graphql`
  {
    posts: allSanityPost {
      edges {
        node {
          _id
          title
          slug {
            current
          }
          author {
            name
          }
          price
          mainImage {
            alt
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <Wrapper>
          <h2 sx={{ variant: `styles.h2` }}>
            Restaurants <span sx={{ color: `secondary` }}>&</span> Fashion
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit nulla
            inventore commodi repellendus sunt dolorem animi tempore ad optio,
            nihil temporibus magnam voluptate alias harum!
          </p>
          <p>
            <strong>OUR PURPOSE:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicingel∂t. Accusamus earum corporis illum quis aut sapiente.
          </p>
          <p>
            <strong>OUR MISSION:</strong> Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptates officiis debitis minus dolorum sequi
            aspernatur veniam sint ratione similique impedit!
          </p>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <PostList posts={data.posts.edges} />
        </Wrapper>
      </Section>
      <Section sx={{ minHeight: `50vh`, bg: `primary` }}></Section>
    </Layout>
  )
}

export default IndexPage
