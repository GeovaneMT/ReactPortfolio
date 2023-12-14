import React, { useEffect } from "react"

import { Container } from "./styles"
import { Anchor } from "../../components/anchor"

import node from "../../assets/Icons/node.svg"
import reactjs from "../../assets/Icons/reactjs.svg"
import mysql from "../../assets/Icons/mysql.svg"
import javascript from "../../assets/Icons/javascript.svg"

export const Slider = ({ text = "Tecnologias", ...rest }) => {

useEffect(() => {

  const itens = document.querySelectorAll(".item")

  itens.forEach((item) => {
    item.addEventListener("click", () => handleItemClick(item))
  })

  const handleItemClick = (item) => {

    const main = document.querySelectorAll("main")

    main.forEach((slide) => {
      slide.prepend(item)
    })

    itens.forEach((item) => {
      item.classList.remove("styled")
      setTimeout(() => item.classList.add("styled"))
    })
  }

  return () => {
    itens.forEach((item) => {
      item.removeEventListener("click", () => handleItemClick(item))
    })
  }
  
}, [])

  return (
    <Container {...rest}>
      <Anchor text={text} />

      <main>
        <div className="item styled">
          <div className="content">
            <div className="name">React</div>
            <div className="des">
              Tecnologia Front End para{" "}
              <span>Modularização de Componentes</span> e com bibliotecas de
              estilização como
              <br />
              <span>Styled Components </span> e <span> Vite</span>
            </div>
          </div>
          <div className="icon">
            <img src={reactjs} />
          </div>
        </div>
        <div className="item styled">
          <div className="content">
            <div className="name">Node</div>
            <div className="des">
              Tecnologia Backend para Criação de <span>Rotas de Aplicação</span>
              , Navegação <span>Single Page Aplication </span> e Conexão com o{" "}
              <span>Banco de Dados</span>
            </div>
          </div>
          <div className="icon">
            <img src={node} />
          </div>
        </div>
        <div className="item styled">
          <div className="content">
            <div className="name">JavaScript</div>
            <div className="des">
              Linguagem de Programação versatil ultilizada como base para outras
              Tecnologias como <span> React </span> e <span> Node </span>
            </div>
          </div>
          <div className="icon">
            <img src={javascript} />
          </div>
        </div>
        <div className="item styled">
          <div className="content">
            <div className="name">SQL</div>
            <div className="des">
              Ultilizado para criação e manutenção de Banco de Dados,
              recomenda-se ultilizar um <span> Query Builder </span> para
              traduzir o código para as suas variantes
            </div>
          </div>
          <div className="icon">
            <img src={mysql} />
          </div>
        </div>
      </main>
    </Container>
  )
}
