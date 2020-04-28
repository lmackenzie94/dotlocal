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
        right: direction === "next" ? 25 : null,
        left: direction === "prev" ? 25 : null,
        height: 50,
        width: 50,
        justifyContent: `center`,
        alignItems: `center`,
        cursor: `pointer`,
        borderRadius: `50%`,
        background: `rgba(0,0,0,0.75)`,
        outline: `none`,
        border: `none`,
      }}
    >
      {ArrowIcon}
    </button>
  )
}

export default Arrow
