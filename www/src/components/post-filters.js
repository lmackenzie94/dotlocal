/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import Post from "./post"
import PriceRating from "./price-rating"
import { motion as M } from "framer-motion"

const basicVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { opacity: 0, y: 10 },
}

let shouldAnimate = true

function PostFilters({
  categories,
  handleChange,
  priceRating,
  setPriceRating,
  setSortBy,
}) {
  useEffect(() => {
    shouldAnimate = false
  }, [])
  return (
    <M.div
      variants={shouldAnimate ? basicVariants : null}
      initial={"hidden"}
      animate={"visible"}
      sx={{
        mb: [4],
        bg: `blueDark`,
        color: `white`,
        borderRadius: [0, 4],
        p: [3],
        mx: [-3],
        display: `flex`,
        justifyContent: [`center`, `center`, `flex-start`],
        alignItems: [`center`],
      }}
    >
      {/* TODO add label */}
      <select
        sx={{
          appearance: `none`,
          border: `none`,
          background: `none`,
          outline: `none`,
          borderBottom: `2px solid`,
          borderColor: `white`,
          borderRadius: 0,
          color: `white`,
          pb: `2px`,
          pr: [3],
        }}
        onChange={handleChange}
        aria-label="Select a category"
      >
        <option defaultValue="All">All</option>
        {categories.map(({ node: category }) => (
          <option key={category.name} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
      <div
        sx={{
          display: [`block`, `block`, `block`, `inline-block`],
          ml: [3],
        }}
      >
        {/* <p
          sx={{
            display: `inline-block`,
            m: 0,
            fontWeight: `bold`,
            mr: [3],
          }}
        >
          Sort Price:
        </p> */}
        <button
          onClick={() => setSortBy("highest")}
          sx={{ variant: `buttons.sort`, color: `blueDark` }}
        >
          $&uarr;
        </button>
        <button
          onClick={() => setSortBy("lowest")}
          sx={{ variant: `buttons.sort`, color: `red` }}
        >
          $&darr;
        </button>
      </div>
      <PriceRating
        maxDollarSigns={4}
        priceRating={priceRating}
        setPriceRating={setPriceRating}
        sx={{ display: `inline-block`, mx: [3] }}
      />
    </M.div>
  )
}

export default PostFilters
