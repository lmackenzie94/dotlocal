/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Image from "gatsby-image"

const Slide = ({ image, idx, active }) => {
  return (
    <div
      sx={{
        flex: `1 0 100%`,
        transform: active ? `translateX(-${idx * 100}%)` : null,
        opacity: active ? 1 : 0,
      }}
    >
      <Image
        fluid={image.asset.fluid}
        alt={image.alt}
        sx={{ height: `100%`, borderRadius: 4 }}
        imgStyle={{ objectFit: `contain` }}
      />
    </div>
  )
}

export default Slide
