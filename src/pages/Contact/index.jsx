import { Container } from './styles'

import { Anchor } from '../../components/anchor'
import { Header } from '../../components/header'
import { Button } from '../../components/button'
import { Footer } from "../../components/footer"

import {
  PiInstagramLogo,
  PiWhatsappLogo,
  PiLinkedinLogo,
  PiGithubLogo,
} from "react-icons/pi"

export const Contact = () => {

  return (
    <Container>
      <Anchor text="Contato" />
      <main>
        <Header text="Sinta-se a vontade para entrar em " span="Contato" />
        <div id="buttons">
          <Button title=" Whatsapp" icon={<PiWhatsappLogo />} />
          <Button icon={<PiLinkedinLogo />} title=" Linkedin" />
          <Button icon={<PiGithubLogo />} title=" Github" />
          <Button icon={<PiInstagramLogo />} title=" Instagram" />
        </div>
      </main>
      <Footer />
    </Container>
  )
}