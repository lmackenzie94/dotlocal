import smoothscroll from "smoothscroll-polyfill"

export function onClientEntry() {
  // kick off the polyfill!
  smoothscroll.polyfill()
}
