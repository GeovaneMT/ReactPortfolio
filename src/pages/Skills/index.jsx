import { Container } from './styles'

import { Anchor } from '../../components/anchor'
import { Header } from '../../components/header'
import { Footer } from "../../components/footer"
import { Slider } from "../../components/slider"

export const Skills = () => {

  return (
    <Container>
      <Anchor text="Habilidades" />
      <main>
        <Header text="Aqui estão minhas  " span="Habilidades" />
        <div>
          <span>Venho estudando tecnologias Full Stack:</span>
          <p>JavaScript, Node, React, API Restful, & Base de dados.</p>
        </div>

        <Slider />

        <div>
          <p>
            <span>Também estudo ferramentas UI | UX:</span>
            <br />
            <br />
            Design Thinking, Figma, Notion e Photoshop.
          </p>
        </div>

        <Slider />
        
        <div>
          <p>
            <span>Bem como técnicas de análise de dados:</span>
            <br />
            <br />
            Scrum, Kanbam, Power BI, Bling ERP & Canvas.
          </p>
        </div>

        <Slider />
      </main>
      <Footer iconSize="32px" iconColor="white" />
    </Container>
  )
}