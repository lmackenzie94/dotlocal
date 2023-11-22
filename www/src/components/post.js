/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-regular-svg-icons"
import { faHeart as faHeartFull } from "@fortawesome/free-solid-svg-icons"
import { isLoggedIn } from "../utils/auth"

function Post({ post, liked, handleClick }) {
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
        textAlign: `center`,
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
        <div sx={{ position: `relative`, mx: [-2, -2, -3], mb: [2, 2, 3] }}>
          <Image
            fluid={mainImage.asset.fluid}
            alt={mainImage.alt}
            sx={{
              height: [`100px`, `120px`, `140px`],
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
              bg: `#f2f2f2`,
              borderRadius: 4,
            }}
          >
            {dollarSigns}
          </p>
        </div>
      )}
      <div
        sx={{
          display: `flex`,
          justifyContent: `space-between`,
          alignItems: `center`,
        }}
      >
        {post.category.name === "Fashion" ? (
          <p sx={{ color: `grey`, my: 0, mr: `20px`, fontSize: [0] }}>
            {post.description}
          </p>
        ) : (
          <p sx={{ color: `grey`, my: 0, mr: `20px`, fontSize: [0] }}>
            <span sx={{ fontWeight: `bold` }}>Good For:</span> {post.goodFor}
          </p>
        )}
        {isLoggedIn() && (
          <span
            onClick={e => handleClick(e, post.id)}
            sx={{ cursor: `pointer` }}
          >
            <FontAwesomeIcon
              icon={liked ? faHeartFull : faHeart}
              sx={{ fontSize: `1.5rem` }}
            />
          </span>
        )}
      </div>
    </Link>
  )
}

export default Post
