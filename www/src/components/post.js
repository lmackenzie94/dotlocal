/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Image from "gatsby-image"

function Post({ post }) {
  let dollarSigns = ""
  for (let i = 0; i < post.price; i++) {
    dollarSigns += "$"
  }

  const mainImage = post.images[0]
  const positionStyles = mainImage.hotspot
    ? {
        objectPosition: `${mainImage.hotspot.x * 100}% ${mainImage.hotspot.y *
          100}%`,
      }
    : null

  return (
    <Link
      to={`/posts/${post.slug.current}`}
      sx={{
        display: `block`,
        borderRadius: 4,
        p: [2, 2, 3],
        textDecoration: `none`,
        textAlign: [`center`, `center`, `center`, `left`],
        color: `text`,
        background: `white`,
        boxShadow: `0 2px 4px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24);`,
        transition: `0.3s cubic-bezier(.25,.8,.25,1)`,
        transitionProperty: `all`,
        "&:hover": {
          boxShadow: `0 6px 20px rgba(0,0,0,0.25), 0 6px 6px rgba(0,0,0,0.22)`,
        },
      }}
    >
      <h3 sx={{ variant: `styles.h3` }}>{post.title}</h3>
      {mainImage && (
        <div sx={{ position: `relative`, mx: [-2, -2, -3], mb: [3] }}>
          <Image
            fluid={mainImage.asset.fluid}
            alt={mainImage.alt}
            sx={{
              height: `140px`,
              "&:img": {
                width: `100%`,
                transition: `0.3s ease-out`,
                transitionProperty: `all`,
              },
            }}
            imgStyle={positionStyles}
          />
          <p
            sx={{
              position: `absolute`,
              top: `5px`,
              right: `5px`,
              m: 0,
              px: `5px`,
              bg: `white`,
              borderRadius: 4,
            }}
          >
            {dollarSigns}
          </p>
        </div>
      )}
      <p sx={{ color: `grey`, my: 0, fontSize: [0, 0, 1] }}>
        Posted: {post._createdAt}
      </p>
      {/* {post.locations && (
        <p sx={{ m: 0 }}>
          {post.locations.map(l => (
            <span>{l}</span>
          ))}
        </p>
      )} */}
    </Link>
  )
}

export default Post
