import React from 'react';

import { Container } from './styles'

import { Anchor } from '../../components/anchor'
import { Header } from '../../components/header'
import { Menu } from "../../components/menu"
import { Footer } from "../../components/footer"

import profile from "../../assets/images/profile.jpg"

import { PiUsersThree ,
         PiCodeBlock ,
         PiGear , 
         PiBuildings } from "react-icons/pi"

         export const Home = () => {
           return (
             <Container>
               <Anchor text="Home" />
               <Menu />
               <main>
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
                 <Footer />
               </main>
             </Container>
           )
}