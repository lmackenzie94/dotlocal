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
        sx={{ height: `100%` }}
        imgStyle={{ objectFit: `contain` }}
      />
      {/* {image.caption && (
        <p
          sx={{
            position: `absolute`,
            bottom: 0,
            left: `50%`,
            transform: `translateX(-50%)`,
            textAlign: `center`,
            opacity: active ? 1 : 0,
            background: `rgba(0,0,0,.75)`,
            color: `white`,
            px: `8px`,
            py: `3px`,
            borderRadius: `5px`,
            fontSize: [0, 1],
          }}
        >
          {image.caption}
        </p>
      )} */}
    </div>
  )
}

export default Slide
