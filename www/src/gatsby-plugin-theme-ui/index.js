export const colors = {
  black: "#000",
  white: "#fff",
  green: "#bada55",
  blueDark: "#000033",
  blue: "#00AB97",
  grey: "#999",
  greyLight: "#c7c7c7",
  red: "#cc0000",
}

const theme = {
  breakpoints: ["31em", "40em", "52em", "64em"],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    ...colors,
    text: colors.black,
    background: colors.white,
    primary: colors.blueDark,
    secondary: colors.blue,
  },
  fonts: {
    body:
      'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: "Roboto, sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  fontWeights: {
    body: 400,
    heading: 700,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
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
    },
    h1: {
      variant: "text.heading",
      fontSize: [4, 4, 5],
      m: 0,
    },
    h2: {
      variant: "text.heading",
      fontSize: [3, 3, 4],
      m: 0,
      mb: [2, 3, 4],
    },
    h3: {
      variant: "text.heading",
      fontSize: [2, 2, 3],
      m: 0,
      mb: [1, 2, 3],
    },
  },
  layout: {
    header: {
      color: "white",
      backgroundColor: "primary",
      mb: [4, 4, 5],
      py: [3],
    },
    footer: {
      color: "white",
      backgroundColor: "blueDark",
      py: [2],
      mt: [4, 4, 5],
      textAlign: "center",
    },
  },
}

export default theme
