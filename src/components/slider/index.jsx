import React, { useEffect } from "react"
import { Container } from "./styles"
import { Anchor } from "../../components/anchor"
import { Item } from "../../components/sliderItem"

export const Slider = ({ text = "Tecnologias", ...rest }) => {
useEffect(() => {
  const items = document.querySelectorAll(".item")

  const handleItemClick = (item) => {
    // toggle "styled" class from all items
    items.forEach((otherItem) => {
      otherItem.classList.remove("styled")
      setTimeout(() => otherItem.classList.add("styled"))
    })
  }

  items.forEach((item) => {
    item.addEventListener("click", () => handleItemClick(item))
  })

  return () => {
    items.forEach((item) => {
      item.removeEventListener("click", () => handleItemClick(item))
    })
  }
}, [])

  return (
    <Container {...rest}>
      <Anchor text={text} />

      <main>
        <Item className="item styled" />
        <Item className="item styled" />
        <Item className="item styled" />
        <Item className="item styled" />
      </main>
    </Container>
  )
}