/** @jsx jsx */
import { useRef, useEffect } from "react"
import { jsx } from "theme-ui"
import { colors } from "../gatsby-plugin-theme-ui/index"

let dollarSignNodes

function PriceRating({
  maxDollarSigns,
  priceRating,
  setPriceRating,
  ...props
}) {
  const dollarSignContainer = useRef()

  useEffect(() => {
    dollarSignNodes = Array.from(dollarSignContainer.current.childNodes)
  }, [dollarSignContainer, maxDollarSigns])

  const handleHover = e => {
    const hoverValue = e.target.dataset.value
    dollarSignNodes.forEach(sign => {
      sign.style.color =
        hoverValue >= sign.dataset.value ? colors.red : colors.greyLight
    })
  }

  const handleHoverOff = e => {
    if (!priceRating) {
      dollarSignNodes.forEach(sign => {
        sign.style.color = colors.greyLight
      })
    } else {
      dollarSignNodes.forEach(sign => {
        sign.style.color =
          priceRating >= sign.dataset.value ? colors.red : colors.greyLight
      })
    }
  }

  const handleClick = e => {
    let rating = e.target.dataset.value

    if (e.target.dataset.value === priceRating) {
      dollarSignNodes.forEach(sign => {
        sign.style.color = colors.greyLight
      })
      setPriceRating(null)
    } else {
      dollarSignNodes.forEach(sign => {
        sign.style.color =
          rating >= sign.dataset.value ? colors.red : colors.greyLight
      })
      setPriceRating(rating)
    }
  }

  let dollarSigns = [...Array(maxDollarSigns).keys()].map(n => (
    <button
      key={n + 1}
      data-value={n + 1}
      sx={{
        appearance: `none`,
        outline: `none`,
        background: `none`,
        border: `none`,
        p: 0,
        mx: `3px`,
        width: 11,
        fontSize: [4],
        color: `greyLight`,
        transition: `0.2s ease-out`,
        transitionProperty: `color`,
      }}
      onMouseOver={handleHover}
      onFocus={handleHover}
      onClick={handleClick}
    >
      &#36;
    </button>
  ))

  return (
    <div
      {...props}
      ref={dollarSignContainer}
      onMouseLeave={handleHoverOff}
      role="group"
    >
      {dollarSigns}
    </div>
  )
}

export default PriceRating
