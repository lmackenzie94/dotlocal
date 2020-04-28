/** @jsx jsx */
import { jsx } from "theme-ui"

const SliderContent = ({ children }) => {
  return <div sx={SliderContentStyles}>{children}</div>
}

const SliderContentStyles = {
  display: `flex`,
  height: `100%`,
  position: `relative`,
}

export default SliderContent
