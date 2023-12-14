import React, { useEffect } from "react"

import { Container } from "./styles"
import { Anchor } from "../../components/anchor"
import { Item } from "../../components/sliderItem"

import node from "../../assets/Icons/node.svg"
import reactjs from "../../assets/Icons/reactjs.svg"
import mysql from "../../assets/Icons/mysql.svg"
import javascript from "../../assets/Icons/javascript.svg"

export const Slider = ({ text = "Tecnologias", ...rest }) => {

  return (
    <Container {...rest}>
      <Anchor text={text} />
      
      <main>
        <Item />
      </main>
    </Container>
  )
}
