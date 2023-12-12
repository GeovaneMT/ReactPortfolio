import { Container } from './styles'

import { Anchor } from '../../components/anchor'
import { Header } from '../../components/header'
import { Footer } from "../../components/footer"

import profile from "../../assets/pics/profile.jpg"
import logo from "../../assets/pics/Logo.png"
import background from "../../assets/pics/BG.png"

export const Home = () => {
  
 // const myDiv = document.getElementById(".main")

  // myDiv.style.backgroundImage = `url(${background})`
 //  myDiv.style.backgroundSize = "cover"

  return (
    <Container>
      <Anchor text="Contato" />
      <main>
        <Header text="Olá, eu sou  " span="Geovane M.T" />
        <div className="pic">
          <img src={profile} alt="" />
        </div>
        <ul>
          <li>Engenheiro de Software</li>
          <li>Desenv. Full Stack </li>
          <li>UI | UX Designer </li>
          <li>Administrador </li>
        </ul>
        <div className="scroll">
          <img src="" alt="" />
        </div>
      </main>
      <Footer iconSize="32px" iconColor="white" />
    </Container>
  )
}