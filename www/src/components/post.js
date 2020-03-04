/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Image from "gatsby-image"

function Post({ post }) {
  return (
    <Link
      to={`/posts/${post.slug.current}`}
      sx={{
        display: `block`,
        borderRadius: 5,
        p: [2, 2, 3],
        textDecoration: `none`,
        color: `text`,
        boxShadow: `0 2px 4px rgba(0,0,0,0.12), 0 2px 3px rgba(0,0,0,0.24);`,
        transition: `0.3s cubic-bezier(.25,.8,.25,1)`,
        transitionProperty: `all`,
        "&:hover": {
          boxShadow: `0 6px 20px rgba(0,0,0,0.25), 0 6px 6px rgba(0,0,0,0.22)`,
        },
      }}
    >
      <h3 sx={{ variant: `styles.h3` }}>{post.title}</h3>
      <div sx={{ position: `relative`, mx: [-2, -2, -3], mb: [3] }}>
        <Image
          fluid={post.mainImage.asset.fluid}
          alt={post.mainImage.alt}
          sx={{ height: `140px`, "&:img": { width: `100%` } }}
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
          {post.price}
        </p>
      </div>
      <p sx={{ m: 0 }}>421 Spadina Avenue</p>
    </Link>
  )
}

export default Post
