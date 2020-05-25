import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import {
  FirebaseProvider,
  UserSavedPostsProvider,
} from "../components/auth/context"

const NotFoundPage = () => (
  <FirebaseProvider>
    <UserSavedPostsProvider>
      <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    </UserSavedPostsProvider>
  </FirebaseProvider>
)

export default NotFoundPage
