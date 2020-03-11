/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "theme-ui"
import Post from "./post"
import PriceRating from "./price-rating"
import { motion as M } from "framer-motion"

const basicVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  hidden: { opacity: 0, y: 10 },
}

function PostFilters({
  categories,
  handleChange,
  priceRating,
  setPriceRating,
  setSortBy,
}) {
  return (
    <M.div
      variants={basicVariants}
      initial={"hidden"}
      animate={"visible"}
      sx={{
        mb: [4],
        bg: `white`,
        borderRadius: 10,
        px: [3],
        py: [2],
        mx: [-3],
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
          borderColor: `secondary`,
          borderRadius: 0,
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
      <PriceRating
        maxDollarSigns={4}
        priceRating={priceRating}
        setPriceRating={setPriceRating}
        sx={{ display: `inline-block`, mx: [4] }}
      />
      <div
        sx={{
          display: [`block`, `block`, `block`, `inline-block`],
          border: `1px dashed`,
          borderColor: `greyLight`,
          mt: [3, 3, 3, 0],
          p: [2],
          textAlign: `center`,
        }}
      >
        <p
          sx={{
            display: `inline-block`,
            m: 0,
            fontWeight: `bold`,
            mr: [3],
          }}
        >
          Sort Price:
        </p>
        <button
          onClick={() => setSortBy("highest")}
          sx={{ variant: `buttons.sort`, bg: `blueDark` }}
        >
          High to Low
        </button>
        <button
          onClick={() => setSortBy("lowest")}
          sx={{ variant: `buttons.sort`, bg: `red`, ml: [2, 3] }}
        >
          Low to High
        </button>
      </div>
    </M.div>
  )
}

export default PostFilters
