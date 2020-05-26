/** @jsx jsx */
import { jsx } from "theme-ui"
import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInfo, faTimes } from "@fortawesome/free-solid-svg-icons"

const CaptionCallout = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <p
        sx={{
          // width: `100%`,
          maxWidth: [250, 300, 400],
          position: `absolute`,
          top: 0,
          left: `50%`,
          transform: `translateX(-50%)`,
          textAlign: `center`,
          borderRadius: 4,
          background: `white`,
          padding: `8px`,
          opacity: isOpen ? 1 : 0,
          transition: `opacity 0.2s ease-out`,
          fontSize: [0, 0, 1],
        }}
      >
        {text}
      </p>
      <button
        onClick={() => setIsOpen(curr => !curr)}
        sx={{
          width: 30,
          height: 30,
          borderRadius: `50%`,
          border: `3px solid black`,
          background: `white`,
          position: `absolute`,
          top: `10px`,
          right: `10px`,
          outline: `none`,
          cursor: `pointer`,
        }}
      >
        <FontAwesomeIcon icon={isOpen ? faTimes : faInfo} />
      </button>
    </>
  )
}

export default CaptionCallout
