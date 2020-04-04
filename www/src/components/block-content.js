/** @jsx jsx */
import { jsx } from "theme-ui"
import BaseBlockContent from "@sanity/block-content-to-react"

const serializers = {
  types: {
    block(props) {
      switch (props.node.style) {
        case "heading":
          return <p sx={{ variant: `styles.h3`, mb: 0 }}>{props.children}</p>
        default:
          return <p>{props.children}</p>
      }
    },
  },
  marks: {
    highlight: props => (
      <span sx={{ backgroundColor: `#ffe0e0` }}>{props.children}</span>
    ),
    link: props => {
      const { children, mark } = props
      return (
        <a
          href={mark.href}
          sx={{
            color: `primary`,
            ":hover, :focus": { textDecoration: `none` },
          }}
        >
          {children}
        </a>
      )
    },
    caps: props => {
      return <span sx={{ textTransform: `uppercase` }}>{props.children}</span>
    },
  },
}

const BlockContent = ({ blocks }) => (
  <BaseBlockContent blocks={blocks} serializers={serializers} />
)

export default BlockContent
