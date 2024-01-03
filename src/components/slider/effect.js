import { useEffect } from "react"

export const Effect = (mainRef, itemsConfig) => {
  useEffect(() => {
    const sliderItems = mainRef.current.querySelectorAll(".item")

    const handleItemClick = (item) => {
      sliderItems.forEach((item) => {
        item.classList.remove("styled")
      })

      setTimeout(() => {
        sliderItems.forEach((item) => {
          item.classList.add("styled")
        })
      }, 0)

      if (mainRef.current) {
        const firstItem = mainRef.current.querySelector(".item")

        if (firstItem && firstItem !== item) {
          mainRef.current.insertBefore(item, firstItem)
          mainRef.current.append(firstItem)
        }
      }
    }

    const itemClickHandler = (item, index) => () => {
      handleItemClick(item, itemsConfig[index])
    }

    const addEventListeners = () => {
      sliderItems.forEach((item, index) => {
        item.addEventListener("click", itemClickHandler(item, index))
      })
    }

    const removeEventListeners = () => {
      sliderItems.forEach((item, index) => {
        item.removeEventListener("click", itemClickHandler(item, index))
      })
    }

    addEventListeners()

    return () => {
      removeEventListeners()
    }
  }, [itemsConfig, mainRef])
}
