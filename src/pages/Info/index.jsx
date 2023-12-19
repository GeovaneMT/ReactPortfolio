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
          <p>
            <span>Sua visita é muito importante para mim, obrigado!</span>
            <br />
            <br />
            Sou um entusiasta por Fotografia, Carros e Games.
          </p>

          <p>
            Atualmente estou cursando <span>Engenharia de Software</span> na
            Anhanguera, e <span>Desenvolvimento Full Stack</span> na Rocketseat:
          </p>
        </div>

        <Slider
          anchor="Formação"
          itemsConfig={[
            {
              icon: anhanguera,
              title: "Eng. Software",
              text: (
                <>
                  Bacharelado Anhanguera com o objetivo de aprender
                  <span>todas as etapas </span>do desenvolvimento de um
                  software.
                </>
              ),
            },
            {
              icon: rocket,
              title: "Rocketseat",
              text: (
                <>
                  Bootcamp de 1 ano aprendendo
                  <span>Programação baseada em JS.</span> Isso inclui:
                  <span>
                    Javascript, React, Node, SQL, Frameworks e bibliotecas JS.
                  </span>
                </>
              ),
            },
            {
              icon: matera,
              title: "Matera Camp",
              text: (
                <>
                  Bootcamp da Matera de 1 semana, com o objetivo de aprender
                  sobre <span>Segurança da Informação </span>e
                  <span>Cloud.</span>
                </>
              ),
            },
          ]}
        />
      </main>

      <Footer />
    </Container>
  )
}