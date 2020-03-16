/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Section, Wrapper } from "../system"
import Image from "gatsby-image"

export const query = graphql`
  query PostPageTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
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
`

const PostPageTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title="Posts" />
      <Section sx={{ pt: [`220px`] }}>
        <Wrapper>
          <h1>{data.post.title}</h1>
          <div
            sx={{
              display: `flex`,
              flexDirection: [`column-reverse`, `column-reverse`, `row`],
              bg: `white`,
              p: [3],
              mx: [-3],
              borderRadius: 10,
              "& > *": { flex: `1 0 50%` },
            }}
          >
            <div>
              <h3>This place is super dope!</h3>
            </div>
            <Image
              fluid={data.post.mainImage.asset.fluid}
              alt={data.post.mainImage.alt}
              sx={{
                width: `100%`,
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                "&:img": { width: `100%` },
              }}
            />
          </div>
          <div></div>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default PostPageTemplate
