/** @jsx jsx */
import { jsx } from "theme-ui"

function Divider() {
  return (
    <div
      sx={{
        display: `flex`,
        justifyContent: `center`,
        alignItems: `center`,
        my: [`30px`, `30px`, `40px`],
      }}
    >
      <svg height="8" width="8" sx={{ fill: `primary`, mx: `4px` }}>
        <circle cx="4" cy="4" r="4" />
      </svg>
      <svg height="10" width="10" sx={{ fill: `red`, mx: `4px` }}>
        <circle cx="5" cy="5" r="5" />
      </svg>
      <svg height="12" width="12" sx={{ fill: `primary`, mx: `4px` }}>
        <circle cx="6" cy="6" r="6" />
      </svg>
      <svg height="10" width="10" sx={{ fill: `red`, mx: `4px` }}>
        <circle cx="5" cy="5" r="5" />
      </svg>
      <svg height="8" width="8" sx={{ fill: `primary`, mx: `4px` }}>
        <circle cx="4" cy="4" r="4" />
      </svg>
    </div>
  )
}

export default Divider
