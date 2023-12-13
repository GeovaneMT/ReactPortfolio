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
    <Container className='container'>
      <Anchor text="Contato" />
      <main className="main">
        <Header text="Olá, eu sou  " span="Geovane M.T" />
        <div className="pic">
          <img src={profile} alt="" />
        </div>
        <ul>
          <li>
            <PiUsersThree style={{ color: theme.COLORS.CYAN }} /> Engenheiro de
            Software
          </li>

          <li>
            <PiCodeBlock style={{ color: theme.COLORS.CYAN }} /> Desenv. Full
            Stack
          </li>
          <li>
            <PiGear style={{ color: theme.COLORS.CYAN }} /> UI | UX Designer
          </li>
          <li>
            <PiBuildings style={{ color: theme.COLORS.CYAN }} /> Administrador
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