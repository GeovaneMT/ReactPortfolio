import React, { useEffect, useRef } from "react"
import { Container } from "./styles"
import { Anchor } from "../../components/anchor"
import { Item } from "../../components/sliderItem"
import reactjs from "../../assets/Icons/reactjs.svg"
import node from "../../assets/Icons/node.svg"
import mysql from "../../assets/Icons/mysql.svg"
import javascript from "../../assets/Icons/javascript.svg"

export const Slider = ({
  anchor = "Tecnologias",
  itemsConfig = [
    {
      icon: reactjs,
      title: "React ",
      text1: "Tecnologia Front End para ",
      span1: "Modularização de Componentes ",
      br1: true,
      text2: "e com bibliotecas de estilização como ",
      span2: "Styled Components ",
      br2: false,
      text3: "e ",
      span3: "Vite",
      br3: false,
    },
    {
      icon: node,
      title: "Node",
      text1: "Tecnologia Backend para Criação de ",
      span1: "Rotas de Aplicação ",
      br1: false,
      text2: ", Navegação ",
      span2: "Single Page Application ",
      br2: false,
      text3: "e Conexão com o ",
      span3: "Banco de Dados",
      br3: false,
    },
    {
      icon: mysql,
      title: "SQL",
      text1:
        "Utilizado para criação e manutenção de Banco de Dados, recomenda-se utilizar um ",
      span1: "Query Builder ",
      br1: false,
      text2: "para traduzir o código para as suas variantes ",
      span2: "",
      br2: false,
      text3: "",
      span3: "",
      br3: false,
    },
    {
      icon: javascript,
      title: "JavaScript",
      text1:
        "Linguagem de Programação versátil utilizada como base para outras Tecnologias como ",
      span1: "React ",
      br1: false,
      text2: "e ",
      span2: "Node ",
      br2: false,
      text3: "Essenciais para desenvolver apps",
      span3: "",
      br3: false,
    },
  ],
  ...rest
}) => {

  const mainRef = useRef(null)

  useEffect(() => {
    const sliderItems = mainRef.current.querySelectorAll(".item")

    const handleItemClick = (item, config) => {

      // Remove the "styled" class from all items
      sliderItems.forEach((item) => {
        item.classList.remove("styled")
      })

      // Use setTimeout with a delay of 0 to add the "styled" class back to the clicked item
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

    sliderItems.forEach((item, index) => {
      item.addEventListener("click", itemClickHandler(item, index))
    })

    return () => {
      sliderItems.forEach((item, index) => {
        item.removeEventListener("click", itemClickHandler(item, index))
      })
    }
  }, [itemsConfig])

  return (
    <Container {...rest}>
      <Anchor text={anchor} />

      <main className="main" ref={mainRef}>
        {itemsConfig.map((config, index) => (
          <Item key={index} className="item styled" {...config} />
        ))}
      </main>
    </Container>
  )
}
