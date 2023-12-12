import { Container } from "./styles"

import { Anchor } from "../../components/anchor"

export const Techs = ({ ...rest}) => {

  return (
    <Container {...rest}>
      <div id="education">
        <Anchor text="Formação" />
        <div id="content">
          <div id="Section">
            <p id="inside">
              RocketSeat -<br />
              Desenvolvimento Full Stack
            </p>
          </div>
          <div id="Section">
            <p id="inside">
              Anhanguera -<br />
              Engenharia de Software
            </p>
          </div>
          <div id="Section">
            <p id="inside">
              Matera -<br /> Segurança da Informação e Cloud!
            </p>
          </div>
        </div>
      </div>
      <div id="tools">
        <Anchor text="Ferramentas" />
        <div id="content">
          <div id="Section">
            <p id="inside">Figma</p>
          </div>
          <div id="Section">
            <p id="inside">Notion</p>
          </div>
          <div id="Section">
            <p id="inside">Git</p>
          </div>
          <div id="Section">
            <p id="inside">Vs Code</p>
          </div>
          <div id="Section">
            <p id="inside">Canva</p>
          </div>
          <div id="Section">
            <p id="inside">Photoshop</p>
          </div>
        </div>
      </div>
      <div id="techs">
        <Anchor text="Tecnologias" />
        <div id="content">
          <div id="Section">
            <p id="inside">React</p>
          </div>
          <div id="Section">
            <p id="inside">Node</p>
          </div>
          <div id="Section">
            <p id="inside">SQL</p>
          </div>
          <div id="Section">
            <p id="inside">JavaScript</p>
          </div>
          <div id="Section">
            <p id="inside">CSS</p>
          </div>
          <div id="Section">
            <p id="inside">HTML</p>
          </div>
        </div>
      </div>
    </Container>
  )
}
