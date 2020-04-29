/** @jsx jsx */
import { jsx } from "theme-ui"
import { Wrapper, Section } from "../system"
import { motion as M } from "framer-motion"
import { useEffect } from "react"
import image from "../images/the6.jpg"
import logo from "../images/logo.svg"
import smoothScrollTo from "../utils/smoothScrollTo"

const basicVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 10 },
}

let shouldAnimate = true

const Hero = () => {
  useEffect(() => {
    shouldAnimate = false
  }, [])
  return (
    <Section
      sx={{
        mb: [0],
        mt: [`100px`],
        width: `100%`,
        py: [5],
        background: `linear-gradient(
      rgba(0,4,41, 0.9), 
      rgba(0,4,41, 0.9)
    ), url(${image})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
      }}
    >
      <Wrapper
        sx={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-evenly`,
          alignItems: `center`,
          height: `100%`,
        }}
      >
        <img src={logo} alt="logo" sx={{ width: 190 }} />
        <M.h2
          sx={{
            variant: `styles.h2`,
            color: `white`,
            my: [4, 4, 5, 4],
            textAlign: `center`,
          }}
          initial="hidden"
          animate="visible"
          variants={shouldAnimate ? basicVariants : null}
        >
          Your guide for food and men’s fashion accessible to you in the Toronto
          area.
        </M.h2>
        <M.button
          sx={{ variant: `buttons.primary`, textTransform: `uppercase` }}
          onClick={() => smoothScrollTo("post-list")}
        >
          Browse
        </M.button>
      </Wrapper>
    </Section>
  )
}

export default Hero
