/** @jsx jsx */
import { jsx } from "theme-ui"

const Dot = ({ active, handleClick }) => {
  return (
    <button
      sx={{
        border: `none`,
        outline: `none`,
        p: `5px`,
        mx: `5px`,
        cursor: `pointer`,
        borderRadius: `50%`,
        background: active ? `black` : `white`,
      }}
      onClick={handleClick}
      aria-label="hidden"
    />
  )
}

const Dots = ({ activeIdx, setActiveIdx, slides }) => {
  return (
    <div
      sx={{
        position: `absolute`,
        bottom: 0,
        mb: `10px`,
        left: `50%`,
        transform: `translateX(-50%)`,
        p: `5px`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        background: `rgba(0,0,0,0.5)`,
        borderRadius: `4px`,
      }}
    >
      {slides.map((_, i) => (
        <Dot
          key={`dot-${i}`}
          active={activeIdx === i}
          idx={i}
          handleClick={() => setActiveIdx(i)}
        />
      ))}
    </div>
  )
}

export default Dots
