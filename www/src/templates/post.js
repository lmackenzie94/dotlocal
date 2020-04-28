/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Section, Wrapper } from "../system"
import Image from "gatsby-image"
import BlockContent from "../components/block-content"
import Slider from "../components/slider"

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
      images {
        alt
        caption
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
      _rawBody
    }
  }
`

const PostPageTemplate = ({ data }) => {
  const { title, author, price, images, _rawBody } = data.post
  let dollarSigns = ""
  for (let i = 0; i < price; i++) {
    dollarSigns += "$"
  }
  return (
    <Layout>
      <SEO title="Posts" />
      <Section sx={{ pt: [`220px`] }}>
        <Wrapper>
          <h1 sx={{ textAlign: [`center`, `center`, `left`] }}>{title}</h1>
          <div
            sx={{
              display: `flex`,
              flexDirection: [`column-reverse`, `column-reverse`, `row`],
              justifyContent: `space-between`,
              bg: `white`,
              p: [3],
              mx: [-3],
              borderRadius: 10,
            }}
          >
            <div sx={{ flex: `0 0 auto`, mr: [0, 0, 40, 50] }}>
              <h2
                sx={{
                  fontFamily: `heading`,
                  textTransform: `uppercase`,
                  borderBottom: `2px solid`,
                  borderColor: `secondary`,
                  width: [`100%`, `100%`, `90%`],
                  textAlign: [`center`, `center`, `left`],
                }}
              >
                {`${author.name}'s Picks:`}
              </h2>
              {_rawBody && <BlockContent blocks={_rawBody || []} />}
              <h3
                sx={{
                  variant: `styles.h3`,
                  width: [`100%`, `100%`, `90%`],
                  borderColor: `red`,
                  borderTop: `0.5px dashed`,
                  borderBottom: `0.5px dashed`,
                  textAlign: [`center`, `center`, `left`],
                  m: 0,
                  py: 15,
                }}
              >
                Price Range:
                <span sx={{ color: `secondary`, ml: 10 }}>{dollarSigns}</span>
              </h3>
            </div>
            <div
              sx={{
                borderTopRightRadius: 10,
                borderBottomRightRadius: 10,
                flex: `0 1 100%`,
              }}
            >
              <Slider slides={images} />
            </div>
          </div>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default PostPageTemplate
