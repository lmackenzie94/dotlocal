/** @jsx jsx */
import { jsx } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons"

const ArrowStyles = {
  fontSize: 20,
  color: `white`,
}

const Arrow = ({ direction, handleClick }) => {
  const ArrowIcon = (
    <FontAwesomeIcon
      icon={direction === "next" ? faArrowRight : faArrowLeft}
      sx={ArrowStyles}
    />
  )
  return (
    <button
      onClick={handleClick}
      sx={{
        display: `flex`,
        position: `absolute`,
        top: `50%`,
        transform: `translateY(-50%)`,
        right: direction === "next" ? [10, 10, 15] : null,
        left: direction === "prev" ? [10, 10, 15] : null,
        height: 40,
        width: 40,
        justifyContent: `center`,
        alignItems: `center`,
        cursor: `pointer`,
        borderRadius: `50%`,
        background: `rgba(0,0,0,0.7)`,
        outline: `none`,
        border: `none`,
        "&:hover, &:focus": {
          background: `black`,
        },
      }}
    >
      {ArrowIcon}
    </button>
  )
}

export default Arrow
