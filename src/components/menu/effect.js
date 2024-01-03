import { useEffect } from "react"

export const effect = () => {

  useEffect(() => {
    const barra = document.querySelector(".barra")
    const main = document.querySelector("main")

    if (barra && main) {
      let lastScrollPosition = main.scrollTop

      const handleScroll = () => {
        const goingUp = main.scrollTop < lastScrollPosition
        const atBottom =
          main.scrollHeight - main.scrollTop === main.clientHeight

        if (goingUp || atBottom) {
          barra.classList.remove("hide")
          barra.classList.add("show")
        } else {
          barra.classList.remove("show")
          barra.classList.add("hide")
        }

        lastScrollPosition = main.scrollTop
      }

      main.addEventListener("scroll", handleScroll)

      return () => main.removeEventListener("scroll", handleScroll)
    }
  }, [])
}