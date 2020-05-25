import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FirebaseProvider,
  UserSavedPostsProvider,
} from "../components/auth/context"
import { Section, Wrapper } from "../system"

const NotFoundPage = () => (
  <FirebaseProvider>
    <UserSavedPostsProvider>
      <Layout>
        <Section sx={{ pt: `100px` }}>
          <Wrapper>
            <SEO title="404: Not found" />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          </Wrapper>
        </Section>
      </Layout>
    </UserSavedPostsProvider>
  </FirebaseProvider>
)

export default NotFoundPage
