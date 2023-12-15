import { Container } from "./styles"

import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Slider } from "../../components/slider"

import anhanguera from "../../assets/Icons/anhanguera.png"
import rocket from "../../assets/Icons/rocket.svg"
import matera from "../../assets/Icons/matera.webp"

export const Info = () => {
  return (
    <Container>
      <Anchor text="Sobre Mim" />
      <main>
        <Header text="Você aqui é uma grande" span="Alegria" />
        <div>
          <Anchor text="Sobre mim" />

          <div>
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
          anchor="Formação"
          itemsConfig={[
            {
              icon: anhanguera,
              title: "Eng. Software",
              text1: "Bacharelado Anhanguera com o objetivo de ",
              span1: "aprender todas as etapas ",
              br1: false,
              text2: "do ",
              span2: "desenvolvimento de um software.",
              br2: true,
              text3: "",
              span3: "",
              br3: true,
            },
            {
              icon: rocket,
              title: "Rocketseat",
              text1: "Bootcamp de 1 ano ensinando ",
              span1: "Programação baseada em JS. ",
              br1: true,
              text2: "Isso inclúi: ",
              span2:
                "Javascript, React, Node, SQL, Frameworks e bibliotecas JS ",
              br2: false,
              text3: "",
              span3: "",
              br3: false,
            },
            {
              icon: matera,
              title: "Matera Camp",
              text1:
                "Bootcamp da Matera de 1 semana, com o objetivo de ensinar sobre ",
              span1: "Segurança da Informação ",
              br1: false,
              text2: "e ",
              span2: "Cloud ",
              br2: true,
              text3: "",
              span3: "",
              br3: true,
            },
          ]}
        />
      </main>
      <Footer iconSize="32px" iconColor="white" />
    </Container>
  )
}
