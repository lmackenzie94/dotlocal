/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import Post from "./post"

function PostList({ posts }) {
  return (
    <>
      <h2 sx={{ variant: `styles.h2` }}>Our Picks</h2>
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
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
export default PostList
