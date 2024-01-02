import React, { useEffect } from "react"

//page styles and functions
import { socialIcons } from "./socialIcons"
import { Container } from "./styles"
import { effect } from "./effect"

//modules
import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"

//icons
import {
  PiInstagramLogo,
  PiWhatsappLogo,
  PiLinkedinLogo,
  PiGithubLogo,
} from "react-icons/pi"

export const Contact = () => {

  effect()

  return (
    <Container>
      <Menu />
      <Anchor text="Contato" />
      <main>
        <div>
        <Header text="Sinta-se à vontade para entrar em " span="Contato" />
          <div id="cards">
            {socialIcons.map((button, index) => (
              <Button
                key={index}
                icon={button.icon}
                title={button.title}
                to={button.link}
              />
            ))}
          </div>
        </div>
        <Footer />
      </main>
    </Container>
  )
}
