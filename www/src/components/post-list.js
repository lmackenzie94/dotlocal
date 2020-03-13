/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import Post from "./post"
import { motion as M } from "framer-motion"
import PostFilters from "./post-filters"

let shouldAnimate = true

const itemVariants = {
  before: { opacity: 0, scale: 0.75 },
  after: { opacity: 1, scale: 1 },
}

function PostList({ postData }) {
  const posts = postData.posts.edges
  const categories = postData.categories.edges

  const [priceRating, setPriceRating] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [sortBy, setSortBy] = useState(null)

  useEffect(() => {
    shouldAnimate = false
  }, [])

  const containerVariants = {
    before: {},
    after: {
      transition: {
        staggerChildren: 0.075,
        delayChildren: shouldAnimate ? 0.5 : 0,
      },
    },
  }

  const basicVariants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: shouldAnimate ? 0.5 : 0 },
    },
    hidden: { opacity: 0, y: 10 },
  }

  const filteredPosts = posts.filter(({ node: post }) => {
    if (priceRating && categoryFilter) {
      return post.price === priceRating && post.category.name === categoryFilter
    } else if (priceRating && !categoryFilter) {
      return post.price === priceRating
    } else if (categoryFilter && !priceRating) {
      return post.category.name === categoryFilter
    } else {
      return post
    }
  })

  if (sortBy) {
    switch (sortBy) {
      case "highest":
        filteredPosts.sort(
          (a, b) => parseInt(b.node.price) - parseInt(a.node.price)
        )
        break
      case "lowest":
        filteredPosts.sort(
          (a, b) => parseInt(a.node.price) - parseInt(b.node.price)
        )
        break
      case "newest":
        break
      default:
        break
    }
  }

  const handleChange = e => {
    if (e.target.value === "All") {
      setCategoryFilter(null)
    } else {
      setCategoryFilter(e.target.value)
    }
  }

  return (
    <>
      <M.h2
        variants={shouldAnimate ? basicVariants : null}
        initial={"hidden"}
        animate={"visible"}
        sx={{
          variant: `styles.h3`,
          fontSize: [4, 4, 4, 5],
          textTransform: `uppercase`,
          mb: [2, 3],
          textAlign: `center`,
        }}
      >
        Our Picks
      </M.h2>
      <PostFilters
        categories={categories}
        handleChange={handleChange}
        priceRating={priceRating}
        setPriceRating={setPriceRating}
        setSortBy={setSortBy}
      />
      {filteredPosts.length > 0 ? (
        <M.ul
          variants={containerVariants}
          initial={"before"}
          animate={"after"}
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
            <M.li key={post.id} variants={itemVariants}>
              <Post post={post} />
            </M.li>
          ))}
        </M.ul>
      ) : (
        <p sx={{ fontSize: [2, 2, 3], fontWeight: `bold` }}>
          Nothing yet, but check back later because we're adding more every day!
        </p>
      )}
    </>
  )
}
export default PostList