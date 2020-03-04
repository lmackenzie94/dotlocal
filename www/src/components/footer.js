/** @jsx jsx */
import { jsx } from "theme-ui"
import { Wrapper } from "../system"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCanadianMapleLeaf } from "@fortawesome/free-brands-svg-icons"

function Footer() {
  return (
    <footer sx={{ variant: `layout.footer` }}>
      <Wrapper>
        <p sx={{ m: 0, fontSize: [1, 1, 2] }}>
          <a
            href="https://www.instagram.com/dotlocaltoronto/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              color: `inherit`,
              textDecoration: `none`,
              display: `inline-block`,
            }}
          >
            @DotLocalToronto
          </a>
          <FontAwesomeIcon
            icon={faCanadianMapleLeaf}
            sx={{ mx: `8px`, color: `red` }}
          />
          {new Date().getFullYear()}
        </p>
      </Wrapper>
    </footer>
  )
}

export default Footer
