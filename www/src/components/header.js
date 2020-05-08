/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Wrapper } from "../system"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Status from "./auth/status"
import { FirebaseContext } from "./auth/context"
import { useContext } from "react"

const Header = ({ siteTitle }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 100 && !isScrolled) {
        setIsScrolled(true)
      } else if (window.pageYOffset < 100 && isScrolled) {
        setIsScrolled(false)
      } else {
        return
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolled])

  const firebase = useContext(FirebaseContext)
  console.log("HELLO FROM HEADER", firebase)

  return (
    <header sx={{ variant: "layout.header", py: isScrolled ? [2] : [3] }}>
      <Wrapper
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
          position: `relative`,
        }}
      >
        <h1
          sx={{
            variant: `styles.h1`,
            transitionProperty: `transform`,
            transition: `0.2s ease-out`,
            transform: `scale(${isScrolled ? 0.8 : 1})`,
            fontSize: [4],
            lineHeight: 1,
          }}
        >
          <Link
            to="/"
            sx={{
              textDecoration: `none`,
              display: `block`,
              color: `blueDark`,
            }}
          >
            dotlocal
          </Link>
        </h1>
        <div sx={{ display: `flex`, alignItems: `center` }}>
          <Status />
          <a
            href="https://www.instagram.com/dotlocaltoronto/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              textDecoration: `none`,
              display: `inline-block`,
              color: `blueDark`,
              outline: `none`,
              ":hover, :focus": { color: `red` },
            }}
          >
            <FontAwesomeIcon
              icon={faInstagram}
              sx={{
                fontSize: [6],
              }}
            />
          </a>
        </div>
      </Wrapper>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
