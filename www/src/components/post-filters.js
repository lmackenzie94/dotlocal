/** @jsx jsx */
import { useEffect } from "react"
import { jsx } from "theme-ui"
import PriceRating from "./price-rating"
import { motion as M } from "framer-motion"
import { isLoggedIn } from "../utils/auth"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart as faHeartFull } from "@fortawesome/free-solid-svg-icons"
import { faHeart } from "@fortawesome/free-regular-svg-icons"

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
  setUserSavedPostsFilter,
  userSavedPostsFilter,
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
        mb: [0],
        bg: `blueDark`,
        color: `white`,
        borderRadius: [0, 4],
        borderBottomRightRadius: [0, 0],
        borderBottomLeftRadius: [0, 0],
        py: [2],
        px: [1, 1, 3],
        mx: [-3],
        display: `flex`,
        justifyContent: [`center`, `center`, `flex-start`],
        alignItems: [`center`],
        flexWrap: `wrap`,
      }}
    >
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
          pl: `3px`,
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
          ml: [3, 4],
        }}
      >
        <button
          onClick={() => setSortBy("highest")}
          sx={{ variant: `buttons.sort`, color: `blueDark` }}
          title="Sort Price: High to Low"
          aria-label="Sort Price high to low"
        >
          $&uarr;
        </button>
        <button
          onClick={() => setSortBy("lowest")}
          sx={{ variant: `buttons.sort`, color: `red` }}
          title="Sort Price: Low to High"
          aria-label="Sort Price low to high"
        >
          $&darr;
        </button>
      </div>
      <PriceRating
        maxDollarSigns={4}
        priceRating={priceRating}
        setPriceRating={setPriceRating}
        sx={{ display: `inline-block`, ml: [2], mr: [3] }}
      />
      {isLoggedIn() && (
        <button
          onClick={() => setUserSavedPostsFilter(prev => !prev)}
          sx={{
            border: `none`,
            outline: `none`,
            background: `white`,
            borderRadius: 2,
            p: [1],
          }}
          title="Your likes"
          aria-label="Filter to see your saved posts"
        >
          <FontAwesomeIcon
            icon={userSavedPostsFilter ? faHeartFull : faHeart}
            sx={{ fontSize: `1.25rem`, color: `red` }}
          />
        </button>
      )}
    </M.div>
  )
}

export default PostFilters
