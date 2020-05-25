import smoothscroll from "smoothscroll-polyfill"
import "firebase/database"

export function onClientEntry() {
  // kick off the polyfill!
  smoothscroll.polyfill()
}
