/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"

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

export const Section = React.forwardRef(({ sx, ...props }, ref) => (
  <Styled.div
    as={`section`}
    ref={ref}
    {...props}
    sx={{
      mb: [5],
      ...sx,
    }}
  />
))
