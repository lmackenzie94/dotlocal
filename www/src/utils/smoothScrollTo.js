export default (id, container = undefined, offset = 0, location = "top") => {
  const el = document.getElementById(id)
  if (!el) {
    console.log("no element")
    return
  }
  if (!container) {
    container = window
  }
  const bounds = el.getBoundingClientRect()

  const offsetName = container === window ? `pageYOffset` : `scrollTop`

  let boundsTop = bounds[location]
  if (container !== window) {
    const containerBounds = container.getBoundingClientRect()
    boundsTop = bounds[location] - containerBounds[location]
  }

  const top = Math.round(container[offsetName] + boundsTop + offset)

  setTimeout(() => {
    container.scroll({
      top,
      left: 0,
      behavior: "smooth",
    })
  }, 1)
}
