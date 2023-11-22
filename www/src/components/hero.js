/** @jsx jsx */
import { jsx } from "theme-ui"
import { Wrapper, Section } from "../system"
import { motion as M } from "framer-motion"
import { useEffect } from "react"
import smoothScrollTo from "../utils/smoothScrollTo"
import Logo from "../icons/logo"
import { useStaticQuery, graphql } from "gatsby"

const basicVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 10 },
}

let shouldAnimate = true

const Hero = () => {
  const site = useStaticQuery(
    graphql`
      query {
        settings: sanitySettings {
          heroImage {
            asset {
              url
            }
          }
        }
      }
    `
  )

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
      rgba(0,4,41, 0.8), 
      rgba(0,4,41, 0.85)
    ), url(${site.settings.heroImage.asset.url})`,
        backgroundSize: `cover`,
        backgroundPosition: `left`,
      }}
    >
      <Wrapper
        sx={{
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `space-evenly`,
          alignItems: `center`,
          height: `100%`,
          position: `relative`,
        }}
      >
        <div
          sx={{
            width: 194,
            pb: 194,
            position: `relative`,
            overflow: `hidden`,
          }}
        >
          <Logo sx={{ position: `absolute`, top: 0, left: 0 }} />
        </div>
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
          transition={{ delay: 1.6, duration: 1 }}
        >
          Your guide for food and men’s fashion accessible to you in the Toronto
          area.
        </M.h2>
        <M.button
          sx={{ variant: `buttons.primary`, textTransform: `uppercase` }}
          onClick={() => smoothScrollTo("post-list")}
          initial="hidden"
          animate="visible"
          variants={shouldAnimate ? basicVariants : null}
          transition={{ delay: 2.3, duration: 0.5 }}
        >
          Browse
        </M.button>
      </Wrapper>
    </Section>
  )
}

export default Hero
