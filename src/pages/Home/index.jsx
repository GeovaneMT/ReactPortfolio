import React, { useEffect } from "react"

import { Container } from "./styles"

import { Anchor } from "../../components/anchor"
import { Header } from "../../components/header"
import { Button } from "../../components/button"
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"

import profile from "../../assets/images/profile.jpg"

import {
  PiInstagramLogo,
  PiWhatsappLogo,
  PiLinkedinLogo,
  PiGithubLogo,
} from "react-icons/pi"

import { PiUsersThree, PiCodeBlock, PiGear, PiBuildings } from "react-icons/pi"

export const Home = () => {
  
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
  useEffect(() => {

    const handleMouseMove = (e) => {
      for (const card of document.querySelectorAll("button")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
      }
    }

    const cardsElement = document.getElementById("cards")

    if (cardsElement) {
      cardsElement.addEventListener("mousemove", handleMouseMove)

      return () => {
        cardsElement.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  return (
    <Container>
      <Menu />
      <main>
        <Anchor text="Home" />
        <div>
          <div>
            <div>
              <img src={profile} alt="Profile" />
            </div>
          </div>
          <div>
            <Header text="Olá, eu sou  " span="Geovane M.T" />
            <ul>
              <li>
                <PiUsersThree />
                Engenheiro de Software
              </li>

              <li>
                <PiCodeBlock />
                Desenv. Full Stack
              </li>
              <li>
                <PiGear />
                UI | UX Designer
              </li>
              <li>
                <PiBuildings />
                Administrador
              </li>
            </ul>
          </div>
        </div>
        <section>
          <div>
            <Header text="Sinta-se à vontade para entrar em " span="Contato" />
            <div id="cards">
              {socialButtons.map((button, index) => (
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
        </section>
      </main>
    </Container>
  )
}
