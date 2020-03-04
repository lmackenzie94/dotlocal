/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import Post from "./post"
import PriceRating from "./priceRating"

function PostList({ posts }) {
  const [priceRating, setPriceRating] = useState(null)

  const filteredPosts = posts.filter(({ node: post }) => {
    if (priceRating) {
      return post.price === priceRating
    } else {
      return post
    }
  })

  return (
    <>
      <h2 sx={{ variant: `styles.h2` }}>Our Picks</h2>
      <div sx={{ mb: [4] }}>
        {/* TODO add label */}
        <select
          sx={{
            appearance: `none`,
            border: `none`,
            background: `none`,
            outline: `none`,
            borderBottom: `2px solid`,
            borderColor: `blue`,
            borderRadius: 0,
            pb: `2px`,
            pr: [3],
          }}
        >
          <option defaultValue="All">All</option>
          <option value="Food">Food</option>
          <option value="Fashion">Fashion</option>
        </select>
        <PriceRating
          maxDollarSigns={4}
          priceRating={priceRating}
          setPriceRating={setPriceRating}
          sx={{ display: `inline-block`, ml: [4] }}
        />
      </div>
      <ul
        sx={{
          listStyle: `none`,
          m: 0,
          p: 0,
          display: `grid`,
          gridTemplateColumns: `repeat(auto-fill, minmax(250px,1fr))`,
          gridGap: `2rem`,
        }}
      >
        {filteredPosts.map(({ node: post }) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
export default PostList
