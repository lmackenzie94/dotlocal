/** @jsx jsx */
import { jsx } from "theme-ui"

import { useState, useEffect } from "react"
import SliderContent from "./slider-content"
import Slide from "./slide"
import Arrow from "./arrow"
import Dots from "./dots"

const Slider = ({ slides }) => {
  const [activeIdx, setActiveIdx] = useState(0)

  let numOfImages = slides.length
  useEffect(() => {
    numOfImages = slides.length
  }, [slides])

  const nextSlide = () => {
    if (activeIdx === numOfImages - 1) {
      setActiveIdx(0)
    } else {
      setActiveIdx(prevIdx => prevIdx + 1)
    }
  }
  const prevSlide = () => {
    if (activeIdx === 0) {
      setActiveIdx(numOfImages - 1)
    } else {
      setActiveIdx(prevIdx => prevIdx - 1)
    }
  }

  return (
    <div sx={SliderStyles}>
      <SliderContent>
        {slides.map((slide, i) => (
          <Slide
            key={`slide-${i}`}
            idx={i}
            image={slide}
            active={i === activeIdx}
          />
        ))}
      </SliderContent>
      <Arrow direction="next" handleClick={nextSlide} />
      <Arrow direction="prev" handleClick={prevSlide} />
      <Dots activeIdx={activeIdx} setActiveIdx={setActiveIdx} slides={slides} />
    </div>
  )
}

const SliderStyles = {
  position: `relative`,
  height: `100%`,
  width: `100%`,
  overflow: `hidden`,
  maxHeight: 400,
}

export default Slider
