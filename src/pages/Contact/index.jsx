import React from "react"
import { Container } from "./styles"
import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Footer } from "../../components/footer"

import {
  PiInstagramLogo,
  PiWhatsappLogo,
  PiLinkedinLogo,
  PiGithubLogo,
} from "react-icons/pi"

export const Contact = () => {
  const socialButtons = [
    { icon: <PiWhatsappLogo />, title: " Whatsapp" },
    { icon: <PiLinkedinLogo />, title: " Linkedin" },
    { icon: <PiGithubLogo />, title: " Github" },
    { icon: <PiInstagramLogo />, title: " Instagram" },
  ]

  return (
    <Container>
      <Anchor text="Contato" />
      <main>
        <Header text="Sinta-se à vontade para entrar em " span="Contato" />
        <div id="buttons">
          {socialButtons.map((button, index) => (
            <Button key={index} icon={button.icon} title={button.title} />
          ))}
        </div>
      </main>
      <Footer />
    </Container>
  )
}
