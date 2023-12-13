import React from "react"
import { useEffect } from "react"

import { Anchor } from "../../components/anchor"

import { Container } from "./styles"
import { PiCaretCircleRightThin, PiCaretCircleLeftThin } from "react-icons/pi"

import node from "../../assets/Icons/node.svg"
import reactjs from "../../assets/Icons/reactjs.svg"
import mysql from "../../assets/Icons/mysql.svg"
import javascript from "../../assets/Icons/javascript.svg"

export const Slider = ({ text = "Tecnologias", ...rest }) => {
  useEffect(() => {
    const ImageSlider = () => {
      document.getElementById("next").onclick = function () {
        let lists = document.querySelectorAll(".item")
        let buttons = document.querySelectorAll(".buttons")

        document.getElementById("slide").appendChild(lists[0])

        buttons.forEach((buttons) => {
          buttons.classList.remove("styledBackwards")
          buttons.classList.remove("styled")
          setTimeout(function () {
            buttons.classList.add("styled")
          })
        })

        lists.forEach((item) => {
          item.classList.remove("styledBackwards")
          item.classList.remove("styled")
          setTimeout(function () {
            item.classList.add("styled")
          })
        })
      }

      document.getElementById("prev").onclick = function () {
        let lists = document.querySelectorAll(".item")
        let buttons = document.querySelectorAll(".buttons")

        document.getElementById("slide").prepend(lists[lists.length - 1])

        buttons.forEach((buttons) => {
          buttons.classList.remove("styled")
          buttons.classList.remove("styledBackwards")
          setTimeout(function () {
            buttons.classList.add("styledBackwards")
          })
        })

        lists.forEach((item) => {
          item.classList.remove("styled")
          item.classList.remove("styledBackwards")
          setTimeout(function () {
            item.classList.add("styledBackwards")
          })
        })
      }
    }

    ImageSlider() // Call the function when the component mounts
  }, []) // Empty dependency array ensures the effect runs once after mount

  return (
    <Container {...rest}>
      <Anchor text={text} />

      <div id="slide">
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
      </div>
      <div className="buttons styled ">
        <button id="prev">
          <PiCaretCircleLeftThin className="hover-button" size="80%" />
        </button>
        <button id="next">
          <PiCaretCircleRightThin className="hover-button" size="80%" />
        </button>
      </div>
    </Container>
  )
}
