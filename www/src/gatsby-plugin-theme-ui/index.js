import bg from "../images/webb.png"

export const colors = {
  black: "#000",
  white: "#fff",
  green: "#bada55",
  blueDark: "#000033",
  blue: "#00AB97",
  grey: "#999",
  greyLight: "#c7c7c7",
  red: "#9c000a",
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
      background: `url(${bg})`,
    },
    h1: {
      variant: "text.heading",
      m: 0,
    },
    h2: {
      variant: "text.heading",
      fontSize: [4, 4, 4, 5],
      m: 0,
      mb: [4, 5],
      mt: [3],
      textAlign: `center`,
    },
    h3: {
      variant: "text.heading",
      fontSize: [3, 3, 3, 4],
      m: 0,
      mb: [1, 2],
    },
  },
  layout: {
    header: {
      color: "blueDark",
      backgroundColor: "white",
      mb: [4, 4, 5],
      py: [3],
      boxShadow: `0 0 5px rgba(0,0,0,0.08), 0 0 4px rgba(0,0,0,0.2);`,
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
    sort: {
      background: `none`,
      outline: `none`,
      border: `none`,
      borderRadius: 2,
      fontSize: [1],
      color: `white`,
      py: [1],
      cursor: `pointer`,
    },
  },
}

export default theme
