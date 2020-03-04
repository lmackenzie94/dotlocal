/** @jsx jsx */
import { jsx, Styled } from "theme-ui"

export const Wrapper = props => (
  <Styled.div
    {...props}
    sx={{
      maxWidth: `1100px`,
      margin: `0 auto`,
      px: [3, 4, 5],
      ...props.sx,
    }}
  />
)

export const Section = props => (
  <Styled.div
    as={`section`}
    {...props}
    sx={{
      mb: [3, 4, 5],
      ...props.sx,
    }}
  />
)
