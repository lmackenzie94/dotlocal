/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useContext } from "react"
import { Link, navigate } from "@reach/router"
import { getUser, isLoggedIn, logout } from "../../utils/auth"
import { useFirebase } from "gatsby-plugin-firebase"
import { UserContext } from "./context"

const Status = ({ style }) => {
  const [firebase, setFirebase] = useState()
  const user = useContext(UserContext)

  useFirebase(fb => {
    setFirebase(fb)
  }, [])

  const handleLogout = e => {
    e.preventDefault()
    logout(firebase).then(() => {
      navigate(`/`)
    })
  }

  let details
  if (!isLoggedIn()) {
    details = (
      <Link
        to="/app/login"
        sx={{
          variant: `buttons.login`,
        }}
      >
        Log in
      </Link>
    )
  } else {
    details = (
      <div>
        <span
          sx={{
            fontSize: [0],
            color: `blueDark`,
            mr: 10,
            textDecoration: `none`,
            display: [`none`, `inline-block`],
          }}
        >
          ({user.email})
        </span>
        <a href="/" onClick={handleLogout} sx={{ variant: `buttons.login` }}>
          Log out
        </a>
      </div>
    )
  }

  return <div sx={{ ...style }}>{details}</div>
}

export default Status
