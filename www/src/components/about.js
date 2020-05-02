/** @jsx jsx */
import { jsx } from "theme-ui"
import { Wrapper, Section } from "../system"
import { motion as M } from "framer-motion"
import { useEffect } from "react"
import { useIntersectionObserver } from "@lmack/hooks"

const fadeUp = {
  before: { opacity: 0, y: 10 },
  after: {
    opacity: 1,
    y: 0,
  },
}

let shouldAnimate = true

const About = () => {
  const [refOne, isVisibleOne] = useIntersectionObserver({
    rootMargin: `-150px`,
    triggerOnce: true,
  })
  const [refTwo, isVisibleTwo] = useIntersectionObserver({
    rootMargin: `-100px`,
    triggerOnce: true,
  })

  useEffect(() => {
    if (isVisibleOne || isVisibleTwo) {
      shouldAnimate = false
    }
  }, [isVisibleOne, isVisibleTwo])

  console.log("Render About")

  return (
    <Section sx={{ background: `white`, my: [4, 4, 5], py: [4] }}>
      <Wrapper>
        <M.div
          ref={refOne}
          sx={{
            textAlign: `center`,
            mb: [3, 3, 4],
            maxWidth: 600,
            m: `0 auto`,
          }}
          variants={shouldAnimate ? fadeUp : null}
          initial={"before"}
          animate={isVisibleOne ? "after" : null}
        >
          <M.p sx={{ mt: 0 }}>
            While being a young person in Toronto is expensive and frankly,
            exhausting, there's a plethora of culture in this city that you just
            can't miss out on.
          </M.p>
          <M.p>
            On this page you can expect to find relevant information you need to
            make informed decisions about how you spend your time & money in
            this city.
          </M.p>
        </M.div>
        <M.div
          variants={shouldAnimate ? fadeUp : null}
          initial={"before"}
          animate={isVisibleTwo ? "after" : null}
          sx={{
            display: `flex`,
            justifyContent: `center`,
            alignItems: [`center`, `center`, `stretch`],
            flexDirection: [`column`, `column`, `row`],
            textAlign: `center`,
          }}
        >
          <div
            ref={refTwo}
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
