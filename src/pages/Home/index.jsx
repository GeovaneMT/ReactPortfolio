import React from "react"

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

//general assets
import profile from "../../assets/images/profile.jpg"

//react icons / phosphor icons
import { PiUsersThree, PiCodeBlock, PiGear, PiBuildings } from "react-icons/pi"

export const Home = () => {
  effect()

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
            <Header text="Olá, eu sou " span="Geovane M.T" />
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
        </section>
      </main>
    </Container>
  )
}