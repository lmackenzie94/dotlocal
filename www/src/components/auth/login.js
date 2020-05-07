// import { navigate } from "@reach/router"
// import View from "./View"
/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { setUser, isLoggedIn } from "../../utils/auth"
import { useFirebase } from "gatsby-plugin-firebase"
import { navigate } from "@reach/router"

const Login = () => {
  const [firebase, setFirebase] = useState()

  useFirebase(firebase => {
    setFirebase(firebase)
  }, [])

  if (isLoggedIn()) {
    console.log("LOGGED IN")
    // navigate(`/app/profile`)
  }

  function getUiConfig(auth) {
    return {
      signInFlow: "popup",
      signInOptions: [
        auth.GoogleAuthProvider.PROVIDER_ID,
        auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // signInSuccessUrl: '/app/profile',
      callbacks: {
        signInSuccessWithAuthResult: result => {
          setUser(result.user)
          console.log("USERRRRR", result.user.displayName, result.user.uid)
          navigate("/")
        },
      },
    }
  }

  return (
    <div sx={{ p: [3], background: `white`, borderRadius: 4 }}>
      <p sx={{ textAlign: `center` }}>Please log in:</p>
      {firebase && (
        <StyledFirebaseAuth
          uiConfig={getUiConfig(firebase.auth)}
          firebaseAuth={firebase.auth()}
        />
      )}
    </div>
  )
}

export default Login
