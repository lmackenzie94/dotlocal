/** @jsx jsx */
import { jsx } from "theme-ui"
import { Router } from "@reach/router"
import Layout from "../components/layout"
import Profile from "../components/profile"
import Login from "../components/auth/login"
import PrivateRoute from "../components/auth/private-route"
import { Section, Wrapper } from "../system"
import {
  FirebaseProvider,
  UserSavedPostsProvider,
  UserProvider,
} from "../components/auth/context"

const App = () => (
  <FirebaseProvider>
    <UserProvider>
      <UserSavedPostsProvider>
        <Layout>
          <Section sx={{ pt: `100px` }}>
            <Wrapper>
              <Router>
                <PrivateRoute path="/app/profile" component={Profile} />
                <Login path="/app/login" />
              </Router>
            </Wrapper>
          </Section>
        </Layout>
      </UserSavedPostsProvider>
    </UserProvider>
  </FirebaseProvider>
)

export default App
