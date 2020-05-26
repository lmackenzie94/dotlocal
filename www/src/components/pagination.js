/** @jsx jsx */
import { jsx } from "theme-ui"

const Pagination = ({ postsPerPage, totalPosts, currentPage, paginate }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <ul
      sx={{
        display: `flex`,
        listStyle: `none`,
        width: `100%`,
        margin: 0,
        mt: 15,
        p: 0,
      }}
    >
      {pageNumbers.map(num => (
        <li key={`page-${num}`}>
          <button
            onClick={() => paginate(num)}
            sx={{
              outline: `none`,
              backgroundColor: `${num === currentPage ? `primary` : `white`}`,
              color: `${num === currentPage ? `white` : `primary`}`,
              borderRadius: 2,
              minWidth: 30,
              mr: 15,
              border: `1px solid`,
              borderColor: `primary`,
              fontWeight: `bold`,
              transition: `0.1s linear`,
              transitionProperty: `all`,
              ":hover, :focus": {
                backgroundColor: `primary`,
                color: `white`,
              },
            }}
          >
            {num}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Pagination
