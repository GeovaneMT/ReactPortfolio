import React from "react"
import styled from "styled-components"
import { useLocation, Link } from "react-router-dom"

import { Container } from "./styles"

import theme from "../../styles/theme"

import { PiHouseLine, PiInfo, PiGear, PiUser } from "react-icons/pi"

const FooterIcon = styled.span`
  color: ${({ $active }) =>
    $active === "true" ? theme.COLORS.WHITE : theme.COLORS.WHITE_50};
`

export const Footer = ({ active, ...rest }) => {
  const icons = [
    { icon: <PiHouseLine />, link: "/" },
    { icon: <PiInfo />, link: "/Info" },
    { icon: <PiGear />, link: "/Skills" },
    { icon: <PiUser />, link: "/Contact" },
  ]

  const currentLocation = useLocation().pathname

  return (
    <Container>
      {icons.map(({ icon, link }, index) => (
        <Link key={index} to={link}>
          <FooterIcon $active={currentLocation === link ? "true" : "false"}>
            {icon}
          </FooterIcon>
        </Link>
      ))}
    </Container>
  )
}