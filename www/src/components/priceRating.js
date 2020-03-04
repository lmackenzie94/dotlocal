/** @jsx jsx */
import { useState, useRef, useEffect } from "react"
import { jsx } from "theme-ui"
import { colors } from "../gatsby-plugin-theme-ui/index"

let dollarSignNodes

function PriceRating({
  maxDollarSigns,
  priceRating,
  setPriceRating,
  ...props
}) {
  //   const [priceRating, setPriceRating] = useState(null)
  const dollarSignContainer = useRef()

  useEffect(() => {
    dollarSignNodes = Array.from(dollarSignContainer.current.childNodes)
  }, [dollarSignContainer, dollarSignNodes, maxDollarSigns])

  const handleHover = e => {
    const hoverValue = e.target.dataset.value
    dollarSignNodes.forEach(sign => {
      sign.style.color =
        hoverValue >= sign.dataset.value ? colors.blue : colors.greyLight
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
          priceRating >= sign.dataset.value ? colors.blue : colors.greyLight
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
          rating >= sign.dataset.value ? colors.blue : colors.greyLight
      })
      setPriceRating(rating)
    }
  }

  let dollarSigns = [...Array(maxDollarSigns).keys()].map(n => (
    <span
      key={n + 1}
      data-value={n + 1}
      sx={{
        mx: `3px`,
        width: 10,
        display: `inline-block`,
        fontSize: [2, 2, 3],
        color: `greyLight`,
      }}
      onMouseOver={handleHover}
      onFocus={handleHover}
      onClick={handleClick}
    >
      &#36;
    </span>
  ))

  return (
    <div {...props} ref={dollarSignContainer} onMouseLeave={handleHoverOff}>
      {dollarSigns}
    </div>
  )
}

export default PriceRating
