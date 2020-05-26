/** @jsx jsx */
import { jsx } from "theme-ui"
import Image from "gatsby-image"
// import CaptionCallout from "./caption-callout"

const Slide = ({ image, idx, active }) => {
  return (
    <div
      sx={{
        flex: `1 0 100%`,
        transform: active ? `translateX(-${idx * 100}%)` : null,
        opacity: active ? 1 : 0,
        position: `relative`,
      }}
    >
      <Image
        fluid={image.asset.fluid}
        alt={image.alt}
        sx={{ height: `100%`, borderRadius: 4 }}
        imgStyle={{ objectFit: `contain` }}
      />
      {/* {image.caption && <CaptionCallout text={image.caption} />} */}
    </div>
  )
}

export default Slide
