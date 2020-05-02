/** @jsx jsx */
import { jsx } from "theme-ui"
import { useEffect } from "react"
import { motion as M } from "framer-motion"

let shouldAnimate = true

const textVariants = {
  before: { opacity: 0, scale: 0.75 },
  after: { opacity: 1, scale: 1 },
}

const circleVariants = {
  before: { strokeDashoffset: 591 },
  after: { strokeDashoffset: 0 },
}

function Logo(props) {
  useEffect(() => {
    shouldAnimate = false
  }, [])
  return (
    <svg width="100%" height="100%" fill="none" {...props}>
      <M.circle
        cx={95.89}
        cy={95.89}
        r={94}
        fill="none"
        stroke="#fff"
        strokeWidth={3.79}
        strokeDasharray={591}
        initial="before"
        animate="after"
        variants={shouldAnimate ? circleVariants : null}
        transition={{
          delay: 0.85,
          strokeDashoffset: { type: "spring", stiffness: 20 },
          default: { duration: 0.85 },
        }}
      />
      <M.path
        initial="before"
        animate="after"
        variants={shouldAnimate ? textVariants : null}
        transition={{
          delay: 0.3,
        }}
        d="M17.11 104.32h-1.43v2.93h-.91v-7.18h2.11a3.56 3.56 0 01.94.15 2.2 2.2 0 01.78.39 2 2 0 01.52.67 2.15 2.15 0 01.19 1 1.91 1.91 0 01-.1.64 1.86 1.86 0 01-.28.52 2.09 2.09 0 01-.42.42 2.9 2.9 0 01-.54.31l1.52 3.07v.06h-1zm-1.43-.75h1.22a1.85 1.85 0 00.58-.09 1.29 1.29 0 00.47-.27 1.14 1.14 0 00.33-.42 1.45 1.45 0 00.11-.57 1.48 1.48 0 00-.11-.61 1.35 1.35 0 00-.31-.43 1.37 1.37 0 00-.49-.27 2.22 2.22 0 00-.6-.09h-1.2zm9.07.36h-3v2.54h3.49v.78h-4.4v-7.18h4.36v.78h-3.45v2.31h3zm5.87 1.5a.9.9 0 00-.16-.55 1.15 1.15 0 00-.38-.38 2.3 2.3 0 00-.52-.26l-.54-.19a6.24 6.24 0 01-.78-.3 3 3 0 01-.71-.42 2.12 2.12 0 01-.53-.59 1.52 1.52 0 01-.2-.81 1.65 1.65 0 01.2-.83 2 2 0 01.54-.61 2.21 2.21 0 01.75-.38 2.6 2.6 0 011.74 0 2.51 2.51 0 01.77.43 2.3 2.3 0 01.54.69 2.12 2.12 0 01.21.89h-.94a1.84 1.84 0 00-.15-.56 1.42 1.42 0 00-.3-.44 1.31 1.31 0 00-.45-.28 1.5 1.5 0 00-.58-.11 1.7 1.7 0 00-.51.08 1.35 1.35 0 00-.45.22 1.19 1.19 0 00-.31.36 1.16 1.16 0 00-.11.51.83.83 0 00.16.52 1.45 1.45 0 00.38.36 3 3 0 00.51.25l.52.17.53.19a3.65 3.65 0 01.53.25 2.85 2.85 0 01.46.31 1.76 1.76 0 01.38.39 1.47 1.47 0 01.25.48 1.74 1.74 0 01-.12 1.43 1.86 1.86 0 01-.55.6 2.48 2.48 0 01-.77.36 3.19 3.19 0 01-.86.12 3 3 0 01-1.76-.57 2.27 2.27 0 01-.58-.69 1.92 1.92 0 01-.24-.91h.93a1.77 1.77 0 00.18.59 1.39 1.39 0 00.35.44 1.51 1.51 0 00.5.27 2.06 2.06 0 00.62.09 2.39 2.39 0 00.53-.06 1.75 1.75 0 00.46-.21 1.23 1.23 0 00.33-.35 1.08 1.08 0 00.13-.5zm7.14-4.58h-2.21v6.4h-.89v-6.4h-2.22v-.78h5.32zm4.65 4.54H40l-.58 1.86h-.91l2.31-7.18h.77l2.28 7.18H43zm-2.15-.79h1.91l-1-3.12zm9.29-4.53v4.86a2.42 2.42 0 01-.18.94 2.33 2.33 0 01-.48.77 2.38 2.38 0 01-2.63.52 2.32 2.32 0 01-.74-.51 2.63 2.63 0 01-.48-.77 2.71 2.71 0 01-.17-.95v-4.86h.86v4.86a2.51 2.51 0 00.1.62 1.73 1.73 0 00.28.52 1.49 1.49 0 00.45.37 1.35 1.35 0 00.62.13 1.31 1.31 0 00.61-.13 1.33 1.33 0 00.45-.36 1.66 1.66 0 00.27-.53 2.52 2.52 0 00.11-.62v-4.86zm3.94 4.25h-1.44v2.93h-.9v-7.18h2.1a3.7 3.7 0 011 .15 2.24 2.24 0 01.77.39 1.9 1.9 0 01.52.67 2.15 2.15 0 01.19 1 1.91 1.91 0 01-.1.64 1.63 1.63 0 01-.28.52 1.68 1.68 0 01-.42.42 2.38 2.38 0 01-.54.31l1.52 3.07v.06h-1zm-1.44-.75h1.22a1.81 1.81 0 00.58-.09 1.29 1.29 0 00.47-.27 1.14 1.14 0 00.33-.42 1.29 1.29 0 00.12-.57 1.48 1.48 0 00-.12-.61 1.22 1.22 0 00-.31-.43 1.42 1.42 0 00-.48-.27 2.36 2.36 0 00-.61-.09h-1.2zm8.55 1.82h-2.4l-.57 1.86h-.92l2.29-7.18h.76l2.28 7.18h-.9zm-2.15-.79h1.91l-1-3.12zm9.28 2.65h-.93l-2.8-5.36v5.36h-.92v-7.18H64l2.78 5.35v-5.35h.92zm6.41-6.4h-2.22v6.4H71v-6.4h-2.19v-.78h5.33zm5 4.58a1 1 0 00-.16-.55 1.25 1.25 0 00-.38-.38 2.3 2.3 0 00-.52-.26l-.55-.19a6.77 6.77 0 01-.77-.3 3 3 0 01-.71-.42 2.12 2.12 0 01-.53-.59 1.52 1.52 0 01-.2-.81 1.65 1.65 0 01.2-.83 2 2 0 01.53-.61 2.31 2.31 0 01.75-.38 2.63 2.63 0 011.75 0 2.63 2.63 0 01.77.43 2.12 2.12 0 01.53.69 2 2 0 01.22.89h-.94a2.18 2.18 0 00-.15-.56 1.42 1.42 0 00-.3-.44 1.31 1.31 0 00-.45-.28 1.54 1.54 0 00-.58-.11 1.82 1.82 0 00-.52.08 1.4 1.4 0 00-.44.22 1.19 1.19 0 00-.31.36 1 1 0 00-.11.51.89.89 0 00.15.52 1.49 1.49 0 00.39.36 3 3 0 00.51.25l.51.17.54.19a3.11 3.11 0 01.52.25 2.55 2.55 0 01.47.31 1.76 1.76 0 01.38.39 1.69 1.69 0 01.25.48 1.57 1.57 0 01.1.58 1.65 1.65 0 01-.22.85 2 2 0 01-.55.6 2.59 2.59 0 01-.77.36 3.19 3.19 0 01-.86.12 3 3 0 01-.94-.15 2.89 2.89 0 01-.82-.42 2.27 2.27 0 01-.58-.69 1.82 1.82 0 01-.25-.91h.9a1.57 1.57 0 00.18.59 1.39 1.39 0 00.35.44 1.51 1.51 0 00.5.27 2.06 2.06 0 00.62.09 2.24 2.24 0 00.52-.06 1.68 1.68 0 00.47-.21A1.23 1.23 0 0079 106a1.08 1.08 0 00.12-.57zm8 0a1.83 1.83 0 01.38-1.13 3.08 3.08 0 01.42-.47c.17-.14.35-.29.55-.43a5.52 5.52 0 01-.53-.85 1.84 1.84 0 01-.19-.83 2.09 2.09 0 01.12-.74 1.5 1.5 0 01.36-.54 1.59 1.59 0 01.56-.34 2.38 2.38 0 01.73-.11 1.69 1.69 0 01.64.12 1.39 1.39 0 01.48.34 1.42 1.42 0 01.31.48 1.62 1.62 0 01.11.58 1.42 1.42 0 01-.08.49 1.71 1.71 0 01-.21.4 2.6 2.6 0 01-.32.35 3.29 3.29 0 01-.41.33l-.46.4 1.51 2a2.61 2.61 0 00.27-.69 3.36 3.36 0 00.11-.8h.82a3.68 3.68 0 01-.18 1.17 3.15 3.15 0 01-.53 1l.9 1.17h-1.08l-.41-.54a2.73 2.73 0 01-.81.47 2.55 2.55 0 01-.92.17 2.46 2.46 0 01-.88-.15 1.74 1.74 0 01-.67-.4 1.78 1.78 0 01-.43-.61 2 2 0 01-.15-.86zm2.13 1.2a2 2 0 00.68-.13 2.07 2.07 0 00.6-.37L89 104l-.14.12a2.39 2.39 0 00-.39.39 1.65 1.65 0 00-.35.68 1 1 0 000 .23 1.45 1.45 0 00.07.47 1.17 1.17 0 00.24.38.94.94 0 00.38.25 1.21 1.21 0 00.47.09zm-.58-4.92a1.54 1.54 0 00.12.57 3.74 3.74 0 00.34.6l.58-.46a1.38 1.38 0 00.25-.21 1.06 1.06 0 00.16-.23 1.09 1.09 0 00.07-.24.9.9 0 000-.23.86.86 0 000-.28.68.68 0 00-.14-.25.62.62 0 00-.22-.17.57.57 0 00-.29-.07.79.79 0 00-.38.08.75.75 0 00-.26.21 1 1 0 00-.16.31 1.11 1.11 0 00-.06.35zm11.91-1.62l1.17 3.59 1.26-3.59h1.13v7.18h-.88v-2.87l.07-3-1.35 3.85h-.52l-1.22-3.76.08 2.89v2.87h-.89v-7.18zm9 3.86h-3v2.54h3.5v.78h-4.41v-7.18h4.36v.78h-3.45v2.31h3zm6.61 3.32h-.93l-2.78-5.36v5.36h-.92v-7.18h.93l2.78 5.35v-5.35h.92zm4.34-7a2.12 2.12 0 01-.06.49 3.39 3.39 0 01-.17.51 2.48 2.48 0 01-.27.47 2 2 0 01-.36.41l-.5-.36a3.12 3.12 0 00.35-.71 2.9 2.9 0 00.11-.79v-.74h.9zm7 5.14a1 1 0 00-.15-.55 1.37 1.37 0 00-.38-.38 2.37 2.37 0 00-.53-.26l-.54-.19a6.77 6.77 0 01-.77-.3 3.23 3.23 0 01-.72-.42 2.09 2.09 0 01-.52-.59 1.53 1.53 0 01-.21-.81 1.65 1.65 0 01.21-.83 1.83 1.83 0 01.53-.61 2.21 2.21 0 01.75-.38 2.63 2.63 0 011.75 0 2.63 2.63 0 01.77.43 2.12 2.12 0 01.53.69 2 2 0 01.22.89h-.94a2.18 2.18 0 00-.15-.56 1.29 1.29 0 00-.31-.44 1.18 1.18 0 00-.44-.28 1.54 1.54 0 00-.58-.11 1.82 1.82 0 00-.52.08 1.4 1.4 0 00-.44.22 1.19 1.19 0 00-.31.36 1 1 0 00-.11.51.89.89 0 00.15.52 1.35 1.35 0 00.39.36 2.92 2.92 0 00.5.25l.52.17.54.19a3.54 3.54 0 01.52.25 2.55 2.55 0 01.47.31 1.76 1.76 0 01.38.39 1.69 1.69 0 01.25.48 1.81 1.81 0 01.1.58 1.65 1.65 0 01-.22.85 2 2 0 01-.55.6 2.59 2.59 0 01-.77.36 3.19 3.19 0 01-.86.12 3 3 0 01-.94-.15 2.89 2.89 0 01-.82-.42 2.3 2.3 0 01-.59-.69 1.92 1.92 0 01-.24-.91h.93a1.58 1.58 0 00.19.59 1.39 1.39 0 00.35.44 1.51 1.51 0 00.5.27 2.06 2.06 0 00.62.09 2.24 2.24 0 00.52-.06 1.5 1.5 0 00.46-.21 1.14 1.14 0 00.34-.35 1.08 1.08 0 00.18-.48zm12.45-1.33h-3v3.17h-.92v-7.18h4.4v.78H137v2.46h3zm5.49 1.31h-2.39l-.58 1.86h-.91l2.31-7.18h.77l2.27 7.18H146zm-2.15-.79h1.91l-.95-3.12zm8.54.83a1 1 0 00-.15-.55 1.37 1.37 0 00-.38-.38 2.37 2.37 0 00-.53-.26l-.54-.19a6.77 6.77 0 01-.77-.3 3.23 3.23 0 01-.72-.42 2.29 2.29 0 01-.53-.59 1.62 1.62 0 01-.2-.81 1.76 1.76 0 01.2-.83 2 2 0 01.54-.61 2.21 2.21 0 01.75-.38 2.63 2.63 0 011.75 0 2.63 2.63 0 01.77.43 2.12 2.12 0 01.53.69 1.86 1.86 0 01.21.89h-.93a1.84 1.84 0 00-.16-.56 1.15 1.15 0 00-.3-.44 1.18 1.18 0 00-.44-.28 1.59 1.59 0 00-.59-.11 1.81 1.81 0 00-.51.08 1.4 1.4 0 00-.44.22 1.19 1.19 0 00-.31.36 1 1 0 00-.12.51 1 1 0 00.16.52 1.35 1.35 0 00.39.36 2.59 2.59 0 00.5.25l.52.17.54.19a3.54 3.54 0 01.52.25 2.94 2.94 0 01.47.31 2 2 0 01.38.39 1.69 1.69 0 01.25.48 1.81 1.81 0 01.09.58 1.65 1.65 0 01-.21.85 2 2 0 01-.55.6 2.59 2.59 0 01-.77.36 3.24 3.24 0 01-.86.12 3 3 0 01-.94-.15 2.89 2.89 0 01-.82-.42 2.3 2.3 0 01-.59-.69 1.92 1.92 0 01-.24-.91h.93a1.58 1.58 0 00.19.59 1.39 1.39 0 00.35.44 1.42 1.42 0 00.5.27 2.06 2.06 0 00.62.09 2.24 2.24 0 00.52-.06 1.5 1.5 0 00.46-.21 1 1 0 00.33-.35 1 1 0 00.11-.5zm6.81 1.82h-.86v-3.32h-2.95v3.32H154v-7.18h.85v3.09h2.95v-3.09h.86zm1.56-7.18h4.34v.8h-1.72v5.59h1.72v.79h-4.34v-.79h1.68v-5.59h-1.68zm10.73 4a5.14 5.14 0 01-.07.78 4.94 4.94 0 01-.18.76 3.32 3.32 0 01-.34.68 2.25 2.25 0 01-.47.55 2 2 0 01-.63.37 2.38 2.38 0 01-1.61 0 2.22 2.22 0 01-.63-.37 2.49 2.49 0 01-.47-.55 3.4 3.4 0 01-.34-.69 4.58 4.58 0 01-.19-.75 5.14 5.14 0 01-.07-.78v-.81a5.12 5.12 0 01.06-.78 6.49 6.49 0 01.19-.76 3.32 3.32 0 01.34-.68 2.28 2.28 0 01.47-.55 2.25 2.25 0 01.63-.38 2.38 2.38 0 011.61 0 2.14 2.14 0 01.64.37 2.33 2.33 0 01.47.56 3.89 3.89 0 01.33.68 3.68 3.68 0 01.19.76 5.14 5.14 0 01.07.78zm-.9-.82a5.17 5.17 0 000-.54 3.57 3.57 0 00-.11-.55 2.31 2.31 0 00-.19-.52 1.46 1.46 0 00-.29-.44 1.41 1.41 0 00-1.54-.3 1.43 1.43 0 00-.42.31 1.42 1.42 0 00-.29.43 3.05 3.05 0 00-.2.53 4.42 4.42 0 00-.13 1.08v.82a5.17 5.17 0 000 .54 3.57 3.57 0 00.11.55 3.35 3.35 0 00.19.53 1.9 1.9 0 00.3.44 1.6 1.6 0 00.42.3 1.22 1.22 0 00.56.11 1.25 1.25 0 00.56-.11 1.6 1.6 0 00.42-.3 1.68 1.68 0 00.29-.44 3.24 3.24 0 00.19-.52 3.66 3.66 0 00.1-.56 5 5 0 000-.54zm6.79 4h-.92l-2.79-5.36v5.36h-.93v-7.18h.93l2.79 5.35v-5.35h.92zM18.52 76.34a5.39 5.39 0 01.75-.08c.29 0 .58 0 .87-.06h1.61a6 6 0 012.61.49A4 4 0 0126.05 78a5.43 5.43 0 01.95 2.1 13.6 13.6 0 01.26 2.75A13.46 13.46 0 0127 85.5a6.12 6.12 0 01-.89 2.21 4.57 4.57 0 01-1.74 1.51 6 6 0 01-2.77.57h-1.53l-.87-.06a4.21 4.21 0 01-.64-.06zm3.48 2h-.63a2 2 0 00-.47 0v9.12h.49a1.47 1.47 0 01.31 0h.2a2.34 2.34 0 001.4-.4 2.73 2.73 0 00.86-1.06 4.93 4.93 0 00.43-1.51 12 12 0 00.13-1.82 11.7 11.7 0 00-.11-1.69 4.29 4.29 0 00-.4-1.42 2.27 2.27 0 00-.83-1 2.32 2.32 0 00-1.38-.22zM29.1 83a9.37 9.37 0 011.15-5.13 3.94 3.94 0 013.52-1.76 4.29 4.29 0 012.12.49 3.86 3.86 0 011.46 1.38 6.32 6.32 0 01.83 2.18 13 13 0 01.29 2.84 9.09 9.09 0 01-1.2 5.13 3.92 3.92 0 01-3.5 1.76 4.6 4.6 0 01-2.14-.47A4 4 0 0130.2 88a6.64 6.64 0 01-.84-2.17A14.74 14.74 0 0129.1 83zm2.5 0a13.74 13.74 0 00.11 1.87 5.81 5.81 0 00.38 1.48 2.81 2.81 0 00.66 1 1.51 1.51 0 001 .36 1.76 1.76 0 001.65-1.11A8.58 8.58 0 0036 83a15 15 0 00-.11-1.82 6.09 6.09 0 00-.38-1.49 2.52 2.52 0 00-.67-1 1.47 1.47 0 00-1-.37Q31.6 78.27 31.6 83zM48 78.53h-3.13v11h-2.38v-11h-3.14v-2.19H48zm12.8 11h-7V76.34h2.38v11h4.62zM60.72 83a9.37 9.37 0 011.15-5.13 3.94 3.94 0 013.52-1.76 4.29 4.29 0 012.12.49A3.86 3.86 0 0169 77.94a6.32 6.32 0 01.83 2.18 13 13 0 01.26 2.88 9.17 9.17 0 01-1.19 5.13 4 4 0 01-3.51 1.76 4.53 4.53 0 01-2.13-.47A4.07 4.07 0 0161.82 88a6.64 6.64 0 01-.82-2.18 14.74 14.74 0 01-.28-2.82zm2.5 0a15.56 15.56 0 00.11 1.87 5.81 5.81 0 00.38 1.48 2.81 2.81 0 00.66 1 1.51 1.51 0 001 .36A1.75 1.75 0 0067 86.54a8.58 8.58 0 00.59-3.54 15 15 0 00-.11-1.82 6.09 6.09 0 00-.38-1.49 2.61 2.61 0 00-.66-1 1.51 1.51 0 00-1-.37q-2.22-.05-2.22 4.68zm16.53 6.09a3.06 3.06 0 01-1.32.61 7 7 0 01-1.63.19 5.22 5.22 0 01-1.91-.34 3.82 3.82 0 01-1.53-1.18 5.89 5.89 0 01-1-2.13 11.76 11.76 0 01-.38-3.26 11.53 11.53 0 01.41-3.33 6.1 6.1 0 011.12-2.1 4 4 0 011.59-1.12 5.34 5.34 0 011.8-.32 7.6 7.6 0 011.61.15 6.76 6.76 0 011.13.34l-.47 2.1a3.14 3.14 0 00-.85-.28 4.79 4.79 0 00-1.14-.11 2.2 2.2 0 00-2 1.13 7 7 0 00-.7 3.56 11.3 11.3 0 00.15 1.91 5.05 5.05 0 00.51 1.48 2.67 2.67 0 00.89 1 2.38 2.38 0 001.3.34 3.22 3.22 0 001.14-.17 4.83 4.83 0 00.85-.43zm6.53-2.46h-3.12l-.78 3H80l3.84-13.34h1.87l3.86 13.34H87.1zm-2.61-2h2.2l-.76-3.09-.3-2.08h-.08l-.32 2.1zm14.54 5h-7V76.34h2.38v11h4.66zm12.92-11H108v11h-2.38v-11h-3.14v-2.29h8.65zM112 83a9.36 9.36 0 011.16-5.13 3.92 3.92 0 013.52-1.76 4.29 4.29 0 012.12.49 3.93 3.93 0 011.46 1.38 6.75 6.75 0 01.83 2.18 13 13 0 01.28 2.84 9.09 9.09 0 01-1.19 5.13 3.94 3.94 0 01-3.5 1.76 4.57 4.57 0 01-2.14-.47A4.07 4.07 0 01113.1 88a6.64 6.64 0 01-.83-2.17A14 14 0 01112 83zm2.5 0a13.67 13.67 0 00.12 1.87 5.82 5.82 0 00.37 1.48 2.69 2.69 0 00.67 1 1.5 1.5 0 001 .36 1.77 1.77 0 001.65-1.11 8.78 8.78 0 00.54-3.58 13.19 13.19 0 00-.11-1.82 5.31 5.31 0 00-.38-1.49 2.4 2.4 0 00-.66-1 1.49 1.49 0 00-1-.37q-2.19-.07-2.2 4.66zm9-6.49a11.58 11.58 0 011.66-.25c.59 0 1.1-.07 1.53-.07a6.92 6.92 0 011.59.17 3.37 3.37 0 011.37.58 3 3 0 011 1.16 3.94 3.94 0 01.38 1.83 5 5 0 01-.61 2.63 3.09 3.09 0 01-1.62 1.39l.75.6 2.45 5.03h-2.74l-2.31-5.22-1-.25v5.47h-2.38zm2.38 6h.81a1.7 1.7 0 001.35-.53 2.64 2.64 0 00.45-1.69 2.26 2.26 0 00-.38-1.38 1.33 1.33 0 00-1.19-.55h-.59a1.58 1.58 0 00-.45.08zM133 83a9.37 9.37 0 011.15-5.13 3.94 3.94 0 013.52-1.76 4.29 4.29 0 012.12.49 3.86 3.86 0 011.46 1.38 6.32 6.32 0 01.83 2.18 13 13 0 01.29 2.84 9.17 9.17 0 01-1.19 5.13 4 4 0 01-3.51 1.76 4.53 4.53 0 01-2.13-.47A4 4 0 01134.1 88a6.64 6.64 0 01-.84-2.17A14.74 14.74 0 01133 83zm2.5 0a15.56 15.56 0 00.11 1.87 5.81 5.81 0 00.38 1.48 2.81 2.81 0 00.66 1 1.51 1.51 0 001 .36 1.76 1.76 0 001.65-1.11 8.58 8.58 0 00.55-3.58 15 15 0 00-.11-1.82 6.09 6.09 0 00-.38-1.49 2.52 2.52 0 00-.67-1 1.47 1.47 0 00-1-.37q-2.19-.07-2.19 4.66zm11.93.11l-.87-2.32h-.09l.3 2.29v6.54h-2.25V76.24h1.84l3.8 6.66.81 2.29h.12l-.31-2.25v-6.6H153v13.34h-1.8zm16-4.54h-3.13v11h-2.38v-11h-3.12v-2.23h8.65zm.87 4.43a9.36 9.36 0 011.16-5.13 3.92 3.92 0 013.54-1.8 4.29 4.29 0 012.12.49 3.93 3.93 0 011.46 1.38 6.75 6.75 0 01.83 2.18 13 13 0 01.28 2.84 9.09 9.09 0 01-1.19 5.13 3.94 3.94 0 01-3.5 1.76 4.57 4.57 0 01-2.14-.47 4.07 4.07 0 01-1.44-1.38 6.64 6.64 0 01-.83-2.17 14 14 0 01-.27-2.83zm2.5 0a13.67 13.67 0 00.12 1.87 5.82 5.82 0 00.37 1.48 2.69 2.69 0 00.67 1 1.5 1.5 0 001 .36 1.77 1.77 0 001.65-1.11 8.78 8.78 0 00.54-3.58 13.19 13.19 0 00-.11-1.82 5.31 5.31 0 00-.38-1.49 2.4 2.4 0 00-.66-1 1.49 1.49 0 00-1-.37q-2.17-.07-2.18 4.66z"
        fill="#fff"
      />
    </svg>
  )
}

export default Logo
