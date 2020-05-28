/** @jsx jsx */
import { jsx } from "theme-ui"
import { useState, useEffect, useRef } from "react"
import SliderContent from "./slider-content"
import Slide from "./slide"
import Arrow from "./arrow"
import Dots from "./dots"

const Slider = ({ slides }) => {
  const [activeIdx, setActiveIdx] = useState(0)

  const numOfImages = useRef(slides.length)
  useEffect(() => {
    numOfImages.current = slides.length
  }, [slides])

  const nextSlide = () => {
    console.log("NEXT")
    if (activeIdx === numOfImages.current - 1) {
      setActiveIdx(0)
    } else {
      setActiveIdx(prevIdx => prevIdx + 1)
    }
  }
  const prevSlide = () => {
    console.log("PREV")
    if (activeIdx === 0) {
      setActiveIdx(numOfImages.current - 1)
    } else {
      setActiveIdx(prevIdx => prevIdx - 1)
    }
  }

  useEffect(() => {
    const handleKeyPress = e => {
      switch (e.which) {
        case 37:
          prevSlide()
          break
        case 39:
          nextSlide()
          break
        default:
          break
      }
    }
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, [activeIdx, nextSlide, prevSlide])

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
