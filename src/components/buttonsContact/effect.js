import { useEffect } from "react"

export const effect = () => {
  const handleMouseMove = (e) => {
    for (const card of document.querySelectorAll("button")) {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

      card.style.setProperty("--mouse-x", `${x}px`)
      card.style.setProperty("--mouse-y", `${y}px`)
    }
  }

  useEffect(() => {
    const cardsElement = document.getElementById("cards")

    if (cardsElement) {
      cardsElement.addEventListener("mousemove", handleMouseMove)

      return () => {
        cardsElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])
}