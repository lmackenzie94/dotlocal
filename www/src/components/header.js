/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Wrapper } from "../system"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import Logo from "../icons/logo"

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "layout.header" }}>
    <Wrapper
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        position: `relative`,
      }}
    >
      <h1 sx={{ variant: `styles.h1` }}>
        <Link
          to="/"
          sx={{
            textDecoration: `none`,
            display: `block`,
            width: 151,
            height: 154,
          }}
        >
          {/* {siteTitle} */}
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

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
