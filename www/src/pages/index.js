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
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
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
            Your guide for food and men’s fashion accessible to you in the
            Toronto area.
          </M.h2>
          <M.div
            variants={containerVariants}
            initial={"before"}
            animate={"after"}
            sx={{ bg: `white`, p: [3], mx: [-3], borderRadius: 10 }}
          >
            <M.p variants={itemVariants}>
              Being a young person in Toronto is expensive and frankly,
              exhausting. But there's a plethora of culture in this city that
              you just can't miss out on.
            </M.p>
            <M.p variants={itemVariants}>
              <strong sx={{ color: `red` }}>OUR PURPOSE:</strong> To help you
              spend your time and money having the time of your life in Toronto.
            </M.p>
            <M.p variants={itemVariants}>
              <strong sx={{ color: `red` }}>OUR MISSION:</strong> To try and
              test all the great & not-so-great restaurants, stores, and brands
              available in Toronto, so you don't have to.
            </M.p>
            <M.p variants={itemVariants}>
              On this page you can expect to find relevant information you need
              to make informed decisions about how you spend your time & money
              in this city.
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
