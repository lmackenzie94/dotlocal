/** @jsx jsx */
import { jsx } from "theme-ui"
import { Wrapper, Section } from "../system"
import { motion as M } from "framer-motion"
import { useEffect } from "react"

const basicVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 10 },
}

const containerVariants = {
  before: {},
  after: { transition: { staggerChildren: 0.075, delayChildren: 0.3 } },
}

const itemVariants = {
  before: { opacity: 0, scale: 0.75 },
  after: { opacity: 1, scale: 1 },
}

let shouldAnimate = true

const About = () => {
  useEffect(() => {
    shouldAnimate = false
  }, [])
  return (
    <Section sx={{ background: `white`, my: [4, 4, 5], py: [4] }}>
      <Wrapper>
        <M.div
          sx={{
            textAlign: `center`,
            mb: [3, 3, 4],
            maxWidth: 600,
            m: `0 auto`,
          }}
        >
          <M.p sx={{ mt: 0 }} variants={shouldAnimate ? itemVariants : null}>
            While being a young person in Toronto is expensive and frankly,
            exhausting, there's a plethora of culture in this city that you just
            can't miss out on.
          </M.p>
          <M.p variants={shouldAnimate ? itemVariants : null}>
            On this page you can expect to find relevant information you need to
            make informed decisions about how you spend your time & money in
            this city.
          </M.p>
        </M.div>
        <M.div
          variants={shouldAnimate ? containerVariants : null}
          initial={"before"}
          animate={"after"}
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: [`center`, `center`, `stretch`],
            flexDirection: [`column`, `column`, `row`],
            textAlign: `center`,
          }}
        >
          <div
            sx={{
              bg: `#f3f3f3`,
              width: 320,
              p: [4],
              mr: [0, 0, 4, 5],
              my: [3, 3, 0],
              borderRadius: 4,
            }}
          >
            <h3 sx={{ variant: `styles.h3`, color: `red` }}>OUR MISSION</h3>
            <p sx={{ mb: 0 }}>
              To try and test all the great & not-so-great restaurants, stores,
              and brands available in Toronto, so you don't have to.
            </p>
          </div>
          <div
            sx={{
              bg: `#f3f3f3`,
              width: 320,
              p: [4],
              ml: [0, 0, 4, 3],
              borderRadius: 4,
            }}
          >
            <h3 sx={{ variant: `styles.h3`, color: `red` }}>OUR PURPOSE</h3>
            <p sx={{ mb: 0 }}>
              To help you spend your time and money having the time of your life
              in Toronto.
            </p>
          </div>
        </M.div>
      </Wrapper>
    </Section>
  )
}

export default About
