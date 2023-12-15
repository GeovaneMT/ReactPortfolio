import { Container } from "./styles"

import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Slider } from "../../components/slider"

import certificate from "../../assets/Icons/certificate-thin.svg"
import flask from "../../assets/Icons/flask-thin.svg"

import anhanguera from "../../assets/Icons/anhanguera.png"
import rocket from "../../assets/Icons/rocket.svg"
import matera from "../../assets/Icons/matera.webp"

export const Info = () => {
  return (
    <Container>
      <Anchor text="Sobre Mim" />
      <main>
        <Header text="Você aqui é uma grande" span="Alegria" />
        <div className="box">
          <Anchor text="Sobre mim" />

          <div className="text">
            <span> Sua visita é muito importante para mim, obrigado! </span>

            <p> Sou um entusiasta por Fotografia, Carros e Games.</p>

            <p>
              Atualmente estou cursando Engenharia de Software na Anhanguera, e
              Desenvolvimento Full Stack na Rocketseat:
            </p>

            <p>
              Venho estudando tecnologias Full Stack como: JavaScript, Node,
              React, API Restful, & Base de dados.
            </p>

            <p>
              Também estudo ferramentas e métodos de UI | UX design: Design
              Thinking, Figma, Notion e Photoshop.
            </p>

            <p>
              Bem como técnicas de administração e análise de dados: Scrum,
              Kanbam, Power BI, Bling ERP & Canvas.
            </p>
          </div>
        </div>
        <Slider
          itemsConfig={[
            {
              icon: anhanguera,
              title: "Custom Title 1",
              text1: "Custom Text 1-1",
              span1: "Custom Span 1-1",
              br1: false,
              text2: "Custom Text 1-2",
              span2: "Custom Span 1-2",
              br2: true,
              text3: "Custom Text 1-3",
              span3: "Custom Span 1-3",
              br3: true,
            },
            {
              icon: rocket,
              title: "Custom Title 2",
              text1: "Custom Text 2-1",
              span1: "Custom Span 2-1",
              br1: true,
              text2: "Custom Text 2-2",
              span2: "Custom Span 2-2",
              br2: false,
              text3: "Custom Text 2-3",
              span3: "Custom Span 2-3",
              br3: false,
            },
            {
              icon: matera,
              title: "Custom Title 3",
              text1: "Custom Text 3-1",
              span1: "Custom Span 3-1",
              br1: false,
              text2: "Custom Text 3-2",
              span2: "Custom Span 3-2",
              br2: true,
              text3: "Custom Text 3-3",
              span3: "Custom Span 3-3",
              br3: true,
            },
          ]}
        />

        <div className="box">
          <Anchor text="Projetos" />
          <div className="background">
            <div className="contentPage">
              <div>
                <img src={flask} />
              </div>
              <p>
                <span>+2</span>Cursos de dev. em andamento
              </p>
            </div>

            <div className="contentPage">
              <div>
                <img src={certificate} />
              </div>
              <p>
                <span>+8</span>Projetos pessoais e educativos
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer iconSize="32px" iconColor="white" />
    </Container>
  )
}
