/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState } from "react"
import { Link, navigate } from "@reach/router"
import { getUser, isLoggedIn, logout } from "../../utils/auth"
import { useFirebase } from "gatsby-plugin-firebase"

const Status = ({ style }) => {
  const [firebase, setFirebase] = useState()

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
      <Link to="/app/login" sx={{ fontFamily: `heading`, color: `red` }}>
        Log in
      </Link>
    )
  } else {
    const { email } = getUser()
    details = (
      <div>
        <a
          href="/"
          onClick={handleLogout}
          sx={{ ml: 15, fontFamily: `heading`, color: `red` }}
        >
          Log out
        </a>
        <span
          sx={{
            fontSize: [0],
            color: `blueDark`,
            ml: 10,
            textDecoration: `none`,
            display: [`none`, `block`],
          }}
        >
          ({email})
        </span>
      </div>
    )
  }

  return <div sx={{ ...style }}>{details}</div>
}

export default Status
