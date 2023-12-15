import React, { useEffect } from "react"

import { Container } from "./styles"

import { Anchor } from "../../components/anchor"
import { Item } from "../../components/sliderItem"

import node from "../../assets/Icons/node.svg"
import reactjs from "../../assets/Icons/reactjs.svg"
import mysql from "../../assets/Icons/mysql.svg"
import javascript from "../../assets/Icons/javascript.svg"

export const Slider = ({ text = "Tecnologias", ...rest }) => {

  useEffect(() => {
    const items = document.querySelectorAll(".item");

    const handleItemClick = (item) => {
      const main = document.querySelectorAll(".main");

      main.forEach((slide) => {
        slide.prepend(item);
      });

      items.forEach((otherItem) => {
        otherItem.classList.remove("styled");
        setTimeout(() => otherItem.classList.add("styled"), 0);
      });
    };

    items.forEach((item) => {
      item.addEventListener("click", () => handleItemClick(item));
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", () => handleItemClick(item));
      });
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <Container {...rest}>
      <Anchor text={text} />

      <main className="main">

        <Item className="item styled" />

        <Item className="item styled"
        icon= {node}
        title="Node"
        text1="Tecnologia Backend para Criação de "
        span1="Rotas de Aplicação "
        br1={false}
        text2=", Navegação "
        span2="Single Page Application "
        br2={false}
        text3="e Conexão com o " 
        span3="Banco de Dados"
        br3={false}
        />

        <Item className="item styled"
        icon= {mysql}
        title="SQL"
        text1="Utilizado para criação e manutenção de Banco de Dados, recomenda-se utilizar um "
        span1="Query Builder "
        br1={false}
        text2="para traduzir o código para as suas variantes "
        span2=""
        br2={false}
        text3=""
        span3=""
        br3={false}
        />

        <Item className="item styled"
        icon= {javascript}
        title="JavaScript"
        text1="Linguagem de Programação versátil utilizada como base para outras Tecnologias como "
        span1="React "
        br1={false}
        text2="e "
        span2="Node "
        br2={false}
        text3=""
        span3=""
        br3={false}
        />

      </main>
    </Container>
  )
}