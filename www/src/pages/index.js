/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/postlist"
import { graphql } from "gatsby"
import { Wrapper, Section } from "../system"
import { motion as M } from "framer-motion"

export const query = graphql`
  {
    posts: allSanityPost {
      edges {
        node {
          id
          title
          slug {
            current
          }
          author {
            name
          }
          price
          category {
            name
          }
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
    categories: allSanityCategory {
      edges {
        node {
          name
        }
      }
    }
  }
`

const basicVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 10 },
}

const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.075, delayChildren: 0.3 } },
}

const itemVariants = {
  before: { opacity: 0, scale: 0.75 },
  after: { opacity: 1, scale: 1 },
}

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Home" />
      <Section>
        <Wrapper>
          <M.h2
            sx={{ variant: `styles.h2` }}
            initial="hidden"
            animate="visible"
            variants={basicVariants}
          >
            Restaurants <span sx={{ color: `secondary` }}>&</span> Fashion
          </M.h2>
          <M.div
            variants={containerVariants}
            initial={"before"}
            animate={"after"}
          >
            <M.p variants={itemVariants}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit
              nulla inventore commodi repellendus sunt dolorem animi tempore ad
              optio, nihil temporibus magnam voluptate alias harum!
            </M.p>
            <M.p variants={itemVariants}>
              <strong>OUR PURPOSE:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicingel∂t. Accusamus earum corporis illum quis
              aut sapiente.
            </M.p>
            <M.p variants={itemVariants}>
              <strong>OUR MISSION:</strong> Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Voluptates officiis debitis minus
              dolorum sequi aspernatur veniam sint ratione similique impedit!
            </M.p>
          </M.div>
        </Wrapper>
      </Section>
      <Section>
        <Wrapper>
          <PostList postData={data} />
        </Wrapper>
      </Section>
      {/* <Section sx={{ minHeight: `50vh`, bg: `primary` }}></Section> */}
    </Layout>
  )
}

export default IndexPage
