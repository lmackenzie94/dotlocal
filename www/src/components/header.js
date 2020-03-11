/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Wrapper } from "../system"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "layout.header" }}>
    <Wrapper
      sx={{
        display: `flex`,
        justifyContent: `space-between`,
        alignItems: `center`,
      }}
    >
      <h1 sx={{ variant: `styles.h1`, m: 0, textTransform: `uppercase` }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
          <span sx={{ fontSize: `0.5em`, ml: `5px`, color: `secondary` }}>
            TORONTO
          </span>
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
            mx: `8px`,
            color: `white`,
            fontSize: [4, 4, 5],
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
