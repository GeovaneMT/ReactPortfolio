import { Container } from './styles'

import { Anchor } from '../../components/anchor'
import { Header } from '../../components/header'
import { Footer } from "../../components/footer"
import { Slider } from "../../components/slider"

export const Skills = () => {

  return (
    <Container>
      <Anchor text="Contato" />
      <main>
        <Header text="Aqui estão minhas  " span="Habilidades" />
        <Slider />
      </main>
      <Footer iconSize="32px" iconColor="white" />
    </Container>
  )
}