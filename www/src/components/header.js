/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Wrapper } from "../system"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Logo from "../icons/logo"

const Header = ({ siteTitle }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 150 && !isScrolled) {
        setIsScrolled(true)
      } else if (window.pageYOffset < 150 && isScrolled) {
        setIsScrolled(false)
      } else {
        return
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isScrolled])

  return (
    <header sx={{ variant: "layout.header", py: isScrolled ? 0 : [3] }}>
      <Wrapper
        sx={{
          display: `flex`,
          justifyContent: `center`,
          alignItems: `center`,
          position: `relative`,
        }}
      >
        <h1
          sx={{
            variant: `styles.h1`,
            transitionProperty: `transform`,
            transition: `0.2s ease-out`,
            transform: `scale(${isScrolled ? 0.75 : 1})`,
          }}
        >
          <Link
            to="/"
            sx={{
              textDecoration: `none`,
              display: `block`,
              width: 151,
              height: 154,
            }}
          >
            <Logo />
          </Link>
        </h1>
        <a
          href="https://www.instagram.com/dotlocaltoronto/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textDecoration: `none`, display: `inline-block` }}
        >
          <FontAwesomeIcon
            icon={faInstagram}
            tabIndex={0}
            sx={{
              color: `blueDark`,
              fontSize: [5, 6],
              position: `absolute`,
              top: `40%`,
              right: [`47px`, 5],
              "&:hover, &:focus": { color: `red` },
            }}
          />
        </a>
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
