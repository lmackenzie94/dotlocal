/** @jsx jsx */

import { useState, useEffect, useContext } from "react"
import { jsx } from "theme-ui"
import Post from "./post"
import { motion as M } from "framer-motion"
import PostFilters from "./post-filters"
import { Section, Wrapper } from "../system"
import { useIntersectionObserver } from "@lmack/hooks"
import Pagination from "./pagination"
import {
  UserSavedPostsContext,
  FirebaseContext,
  UserContext,
} from "./auth/context"

let shouldAnimate = true

const itemVariants = {
  before: { opacity: 0, scale: 0.75 },
  after: { opacity: 1, scale: 1 },
}

function PostList({ postData }) {
  const categories = postData.categories.edges
  const allPosts = postData.posts.edges

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(6)
  const [posts, setPosts] = useState(allPosts)
  const [priceRating, setPriceRating] = useState(null)
  const [categoryFilter, setCategoryFilter] = useState(null)
  const [userSavedPostsFilter, setUserSavedPostsFilter] = useState(false)
  const [sortBy, setSortBy] = useState(null)
  const [savedPosts] = useContext(UserSavedPostsContext)
  const [firebase] = useContext(FirebaseContext)
  const user = useContext(UserContext)

  const handleSaveClick = (e, postId) => {
    e.preventDefault()
    if (!savedPosts.includes(postId)) {
      firebase
        .database()
        .ref(`users/${user.uid}/savedPosts`)
        .update({ [postId]: true })
        .then(() => console.log(`ADDED users/${user.uid}/savedPosts`))
    } else {
      firebase
        .database()
        .ref(`users/${user.uid}/savedPosts/${postId}`)
        .remove()
        .then(() => {
          console.log(`REMOVED users/${user.uid}/savedPosts/${postId}`)
        })
    }
  }

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPosts = posts.length

  const paginate = num => setCurrentPage(num)

  const [ref, isVisible] = useIntersectionObserver({
    rootMargin: `-185px`,
    triggerOnce: true,
  })

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

  const isFiltered = priceRating || categoryFilter

  // must be a better way
  useEffect(() => {
    let filteredPosts = isFiltered
      ? allPosts.filter(({ node: post }) => {
          if (priceRating && categoryFilter) {
            return (
              post.price === priceRating &&
              post.category.name === categoryFilter
            )
          } else if (priceRating && !categoryFilter) {
            return post.price === priceRating
          } else if (categoryFilter && !priceRating) {
            return post.category.name === categoryFilter
          } else return
        })
      : allPosts

    if (userSavedPostsFilter) {
      filteredPosts = filteredPosts.filter(({ node: post }) => {
        return savedPosts.includes(post.id)
      })
    }
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
    setPosts(filteredPosts)
    setCurrentPage(1)
  }, [
    priceRating,
    categoryFilter,
    sortBy,
    allPosts,
    isFiltered,
    savedPosts,
    userSavedPostsFilter,
  ])

  const handleChange = e => {
    if (e.target.value === "All") {
      setCategoryFilter(null)
    } else {
      setCategoryFilter(e.target.value)
    }
  }

  return (
    <Section id="post-list">
      <Wrapper>
        <M.h2
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
          setUserSavedPostsFilter={setUserSavedPostsFilter}
          setSortBy={setSortBy}
          userSavedPostsFilter={userSavedPostsFilter}
        />
        {currentPosts.length > 0 ? (
          <M.ul
            ref={ref}
            variants={containerVariants}
            initial={"before"}
            animate={isVisible ? "after" : null}
            sx={{
              listStyle: `none`,
              m: 0,
              mx: [-3],
              p: 3,
              display: `grid`,
              gridTemplateColumns: `repeat(auto-fill, minmax(250px,1fr))`,
              gridGap: `2rem`,
              bg: `white`,
            }}
          >
            {currentPosts.map(({ node: post }) => (
              <M.li
                key={post.id}
                variants={itemVariants}
                sx={{ alignSelf: `end` }}
              >
                <Post
                  post={post}
                  liked={savedPosts.includes(post.id)}
                  handleClick={handleSaveClick}
                />
              </M.li>
            ))}
          </M.ul>
        ) : (
          <p
            sx={{
              fontSize: [2, 2, 3],
              fontWeight: `bold`,
            }}
          >
            Nothing yet, but check back later because we're adding more every
            day!
          </p>
        )}
        <Pagination
          postsPerPage={postsPerPage}
          totalPosts={totalPosts}
          currentPage={currentPage}
          paginate={paginate}
        />
      </Wrapper>
    </Section>
  )
}
export default PostList
