import { Container } from './styles'

import { Anchor } from '../../components/anchor'
import { Header } from '../../components/header'
import { Footer } from "../../components/footer"

import certificate from "../../assets/Icons/certificate-thin.svg"
import flask from "../../assets/Icons/flask-thin.svg"

export const Info = () => {

  return (
    <Container>
      <Anchor text="Contato" />
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
              {" "}
              Também estudo ferramentas e métodos de UI | UX design: Design
              Thinking, Figma, Notion e Photoshop.
            </p>

            <p>
              Bem como técnicas de administração e análise de dados: Scrum,
              Kanbam, Power BI, Bling ERP & Canvas.
            </p>
          </div>
        </div>
        <div className="box">
          <Anchor text="Projetos" />

          <div className="background">
            <div className="content">
              <div>
                <img src={flask} />
              </div>
              <p>
                <span>+2</span>Cursos de dev. em andamento
              </p>
            </div>

            <div className="content">
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