/** @jsx jsx */
import React from "react"
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
      goodFor
      description
      approxBill
      locations
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
  const {
    title,
    author,
    price,
    images,
    _rawBody,
    locations,
    goodFor,
    description,
    approxBill,
  } = data.post
  let dollarSigns = ""
  for (let i = 0; i < price; i++) {
    dollarSigns += "$"
  }

  // not sure useMemo is necessary?
  const subText = React.useMemo(() => {
    return dollarSigns && (goodFor || description) ? (
      <p sx={{ fontSize: [4], my: 0, textAlign: [`center`, `center`, `left`] }}>
        {dollarSigns} &#8226; {goodFor || description}
      </p>
    ) : dollarSigns && !goodFor ? (
      <p sx={{ fontSize: [4], my: 0, textAlign: [`center`, `center`, `left`] }}>
        {dollarSigns}
      </p>
    ) : !dollarSigns && goodFor ? (
      <p sx={{ fontSize: [4], my: 0, textAlign: [`center`, `center`, `left`] }}>
        {goodFor}
      </p>
    ) : null
  }, [dollarSigns, goodFor, description])

  return (
    <Layout>
      <SEO title={title} />
      <Section sx={{ pt: [`100px`] }}>
        <Wrapper>
          <h1
            sx={{
              textAlign: [`center`, `center`, `left`],
              mb: [0],
            }}
          >
            {title}
          </h1>
          {subText}
          {locations && (
            <p
              sx={{
                m: 0,
                mb: [4],
                color: `red`,
                textAlign: [`center`, `center`, `left`],
              }}
            >
              {locations.map(l => (
                <span key={l}>{l}</span>
              ))}
            </p>
          )}
          <div
            sx={{
              display: `flex`,
              flexDirection: [`column-reverse`, `column-reverse`, `row`],
              justifyContent: `space-between`,
              bg: `white`,
              p: [3],
              mx: [-3],
              borderRadius: 4,
            }}
          >
            <div
              sx={{
                display: `flex`,
                flexDirection: `column`,
                justifyContent: `center`,
                flex: `1 1 auto`,
                mr: [0, 0, 50, 60],
              }}
            >
              <h2
                sx={{
                  fontFamily: `heading`,
                  textTransform: `uppercase`,
                  borderBottom: `2px solid`,
                  borderColor: `secondary`,
                  textAlign: [`center`, `center`, `left`],
                  mt: [20, 20, 0],
                  mb: 0,
                }}
              >
                {`${author.name}'s Picks:`}
              </h2>
              {_rawBody && <BlockContent blocks={_rawBody || []} />}
              {approxBill && (
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
                  Approx. Bill:
                  <span sx={{ color: `secondary`, ml: 10 }}>{approxBill}</span>
                </h3>
              )}
            </div>
            <div
              sx={{
                display: `flex`,
                flex: `10 1 auto`,
                alignItems: `center`,
                minWidth: `40%`,
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
