import React, { useEffect } from "react"
import styled from "styled-components"
import { useLocation, Link } from "react-router-dom"

import { Container } from "./styles"

import theme from "../../styles/theme"

import { PiHouseLine, PiInfo, PiGear, PiUser } from "react-icons/pi"

const FooterIcon = styled.span`
  color: ${({ $active }) =>
    $active === "true" ? theme.COLORS.WHITE : theme.COLORS.WHITE_50};
  cursor: ${({ $active }) => ($active === "true" ? "default" : "pointer")};
`

export const Footer = ({ active, ...rest }) => {
  const icons = [
    { icon: <PiHouseLine />, link: "/" },
    { icon: <PiInfo />, link: "/Info" },
    { icon: <PiGear />, link: "/Skills" },
    { icon: <PiUser />, link: "/Contact" },
  ]

  const currentLocation = useLocation().pathname

  useEffect(() => {
    const barra = document.querySelector(".barra")
    const main = document.querySelector("main")

    if (barra && main) {
      let lastScrollPosition = main.scrollTop

      const handleScroll = () => {
        const goingUp = main.scrollTop < lastScrollPosition
        const atBottom =
          main.scrollHeight - main.scrollTop === main.clientHeight

        if (goingUp || atBottom) {
          barra.classList.remove("hide")
          barra.classList.add("show")
        } else {
          barra.classList.remove("show")
          barra.classList.add("hide")
        }

        lastScrollPosition = main.scrollTop
      }

      main.addEventListener("scroll", handleScroll)

      return () => main.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Container className="barra">
      {icons.map(({ icon, link }, index) => (
        <React.Fragment key={index}>
          {currentLocation === link ? (
            <FooterIcon $active="true">{icon}</FooterIcon>
          ) : (
            <Link to={link}>
              <FooterIcon $active="false">{icon}</FooterIcon>
            </Link>
          )}
        </React.Fragment>
      ))}
    </Container>
  )
}