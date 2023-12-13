import React, { useEffect } from 'react';

import { Container } from './styles'
import theme from '../../styles/theme'

import { Anchor } from '../../components/anchor'
import { Header } from '../../components/header'
import { Footer } from "../../components/footer"

import { PiUsersThree ,
         PiCodeBlock ,
         PiGear , 
         PiBuildings } from "react-icons/pi"

import logo from "../../assets/images/Logo.png"
import background from "../../assets/images/BG.png";
import profile from "../../assets/images/profile.jpg"

export const Home = () => {

  return (
    <Container className="container">
      <Anchor text="Home" />
      <main className="main">
        <Header text="Olá, eu sou  " span="Geovane M.T" />
        <div className="pic">
          <img src={profile} alt="" />
        </div>
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
        <div className="scroll">
          <img src="" alt="" />
        </div>
      </main>
      <Footer iconSize="32px" iconColor="white" />
    </Container>
  )
}