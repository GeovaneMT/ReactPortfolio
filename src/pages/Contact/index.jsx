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
    {
      icon: <PiWhatsappLogo />,
      title: " Whatsapp",
      link: "https://api.whatsapp.com/send?phone=5519996187178&text=Ol%C3%A1,%20Vi%20Seu%20Portfolio%20e%20Gostaria%20De%20Saber%20Mais",
    },

    {
      icon: <PiLinkedinLogo />,
      title: " Linkedin",
      link: "https://www.linkedin.com/in/gmtgeovane/",
    },
    {
      icon: <PiGithubLogo />,
      title: " Github",
      link: "https://github.com/GeovaneMT",
    },
    {
      icon: <PiInstagramLogo />,
      title: " Instagram",
      link: "https://www.instagram.com/gmtgeovane/",
    },
  ]

  return (
    <Container>
      <Anchor text="Contato" />
      <main>
        <Header text="Sinta-se à vontade para entrar em " span="Contato" />
        <div id="buttons">
          {socialButtons.map((button, index) => (
            <Button
              key={index}
              icon={button.icon}
              title={button.title}
              to={button.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </Container>
  )
}
