import bg from "../images/bg.png"

export const colors = {
  black: "#000",
  white: "#fff",
  green: "#bada55",
  blueDark: "#000033",
  blue: "#00AB97",
  grey: "#767676",
  greyLight: "#c7c7c7",
  red: "#9c000a",
}

const baseButton = {
  cursor: `pointer`,
  background: `none`,
  outline: `none`,
  border: `none`,
  transition: `background 0.2s ease-out`,
}

const theme = {
  breakpoints: ["31em", "40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    ...colors,
    text: colors.black,
    background: colors.white,
    primary: colors.blueDark,
    secondary: colors.red,
  },
  fonts: {
    body: "Open Sans, sans-serif",
    heading: "Miriam Libre, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.35,
  },
  text: {
    heading: {
      fontFamily: "heading",
      lineHeight: "heading",
      fontWeight: "heading",
    },
    caps: {
      textTransform: "uppercase",
      letterSpacing: "0.1em",
    },
  },
  styles: {
    root: {
      fontFamily: "body",
      lineHeight: "body",
      fontWeight: "body",
      // background: `url(${bg})`,
      background: `aliceblue`,
      // backgroundAttachment: `fixed`,
    },
    h1: {
      variant: "text.heading",
      m: 0,
    },
    h2: {
      variant: "text.heading",
      fontSize: [3, 4, 4, 5],
      my: [3, 4, 4],
    },
    h3: {
      variant: "text.heading",
      fontSize: [2, 3, 3, 4],
      m: 0,
      mb: [2, 3],
    },
  },
  layout: {
    header: {
      color: "blueDark",
      backgroundColor: "rgba(255,255,255,0.95)",
      boxShadow: `0 0 5px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.2);`,
      position: `fixed`,
      top: 0,
      left: 0,
      width: `100%`,
      zIndex: 10,
    },
    footer: {
      color: "white",
      backgroundColor: "blueDark",
      py: [2],
      mt: [4, 4, 5],
      textAlign: "center",
    },
  },
  buttons: {
    primary: {
      ...baseButton,
      background: `white`,
      border: `2px solid white`,
      borderRadius: 4,
      px: [4],
      py: [2],
      fontWeight: `bold`,
      ":hover, :focus": {
        background: `rgba(255,255,255,0.75)`,
      },
    },
    sort: {
      ...baseButton,
      borderRadius: 2,
      fontSize: [3],
      fontWeight: `bold`,
      bg: `white`,
      p: [1],
      pl: [2],
      mx: [1],
    },
    login: {
      ...baseButton,
      textDecoration: `none`,
      marginTop: `-4px`,
      display: "inline-block",
      color: `white`,
      bg: `red`,
      borderRadius: 4,
      px: [3],
      py: [1],
      fontSize: [1],
      fontWeight: `bold`,
    },
  },
}

export default theme
