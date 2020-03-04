/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Wrapper } from "../system"
import { MenuButton } from "theme-ui"

const Header = ({ siteTitle }) => (
  <header sx={{ variant: "layout.header" }}>
    <Wrapper sx={{ display: `flex`, justifyContent: `space-between` }}>
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
      <MenuButton aria-label="Toggle Menu" sx={{ transform: `scale(1.4)` }} />
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
