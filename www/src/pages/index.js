/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostList from "../components/post-list"
import { graphql } from "gatsby"
import { Wrapper, Section } from "../system"
import { motion as M } from "framer-motion"
import { useEffect } from "react"
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

let shouldAnimate = true

const IndexPage = ({ data }) => {
  useEffect(() => {
    shouldAnimate = false
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Section sx={{ mb: [0], pt: [`220px`] }}>
        <Wrapper>
          <M.h2
            sx={{ variant: `styles.h2` }}
            initial="hidden"
            animate="visible"
            variants={shouldAnimate ? basicVariants : null}
          >
            Your guide for food and men’s fashion accessible to you in the
            Toronto area.
          </M.h2>
          <M.div
            variants={shouldAnimate ? containerVariants : null}
            initial={"before"}
            animate={"after"}
            sx={{
              bg: `white`,
              textAlign: `center`,
              p: [3],
              mx: [0, -3],
              borderRadius: 10,
            }}
          >
            <M.p variants={shouldAnimate ? itemVariants : null}>
              Being a young person in Toronto is expensive and frankly,
              exhausting.
              <br />
              But there's a plethora of culture in this city that you just can't
              miss out on.
            </M.p>
            <M.div
              sx={{
                my: [4],
                mx: `auto`,
                px: [1, 2, 3],
                maxWidth: [`none`, `none`, `95%`],
                border: `1px dashed`,
                borderColor: `greyLight`,
              }}
              variants={shouldAnimate ? itemVariants : null}
            >
              <M.p variants={shouldAnimate ? itemVariants : null}>
                <strong sx={{ color: `red` }}>OUR PURPOSE</strong>
                <br />
                To help you spend your time and money having the time of your
                life in Toronto.
              </M.p>
              <M.p variants={shouldAnimate ? itemVariants : null}>
                <strong sx={{ color: `red` }}>OUR MISSION</strong>
                <br />
                To try and test all the great & not-so-great restaurants,
                stores, and brands available in Toronto, so you don't have to.
              </M.p>
            </M.div>
            <M.p variants={shouldAnimate ? itemVariants : null}>
              On this page you can expect to find relevant information you need
              <br />
              to make informed decisions about how you spend your time & money
              in this city.
            </M.p>
          </M.div>
          <Divider />
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
