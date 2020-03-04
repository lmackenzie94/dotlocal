/** @jsx jsx */
import { jsx } from "theme-ui"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import { Section, Wrapper } from "../system"

// export const query = graphql`
//   {
//     posts: allSanityPost {
//       edges {
//         node {
//           _id
//           title
//           slug {
//             current
//           }
//           author {
//             name
//           }
//           categories {
//             title
//           }
//         }
//       }
//     }
//   }
// `

const PostPageTemplate = ({ data }) => {
  return (
    <Layout>
      <SEO title="Posts" />
      <Section>
        <Wrapper>
          <h1>Post!</h1>
        </Wrapper>
      </Section>
    </Layout>
  )
}

export default PostPageTemplate
