/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { Link, navigate } from "@reach/router"
import { getUser, isLoggedIn, logout } from "../../utils/auth"
import { useFirebase } from "gatsby-plugin-firebase"

export default props => {
  const [firebase, setFirebase] = useState()

  useFirebase(fb => {
    setFirebase(fb)
  }, [])

  let details
  if (!isLoggedIn()) {
    details = (
      <p style={{ margin: 0 }}>
        <Link to="/app/login">
          <u>Log in</u>
        </Link>
      </p>
    )
  } else {
    const { displayName, email } = getUser()
    details = (
      <p style={{ margin: 0 }}>
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(firebase).then(() => {
              navigate(`/`)
            })
          }}
          style={{ marginLeft: `15px` }}
        >
          <u>Log out</u>
        </a>
      </p>
    )
  }

  return <div sx={{ ...props.style }}>{details}</div>
}
