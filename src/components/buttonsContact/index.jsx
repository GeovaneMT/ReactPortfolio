import React from "react"

//page styles and functions
import { socialIcons } from "./socialIcons"
import { Container } from "./styles"
import { effect } from "./effect"

//modules
import { Header } from "../../components/header"
import { Button } from "../../components/button"

export const ButtonsContact = () => {

  effect()

  return (
    <Container>
      <main>
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
      </main>
    </Container>
  )
}