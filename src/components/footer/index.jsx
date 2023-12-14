import React from "react"
import { useLocation } from "react-router-dom"

import theme from "../../styles/theme"
import { Container } from "./styles"

import { PiHouseLine, PiInfo, PiGear, PiUser } from "react-icons/pi"

export const Footer = ({
  iconSize = "3.2rem",
  defaultIconColor = theme.COLORS.WHITE_50,
  activeIconColor = theme.COLORS.WHITE,
  ...rest
}) => {
  const location = useLocation()

  const icons = [
    { icon: <PiHouseLine />, link: "/" },
    { icon: <PiInfo />, link: "/Info" },
    { icon: <PiGear />, link: "/Skills" },
    { icon: <PiUser />, link: "/Contact" },
    // Add other icons as needed
  ]

  const iconStyles = {
    fontSize: iconSize,
    filter: "drop-shadow(0px 4px 4px #020f20)",
    // Add other styles as needed
  }

  return (
    <Container {...rest}>
      {icons.map((icon, index) => (
        <a key={index} href={icon.link} style={{ textDecoration: "none" }}>
          <span
            style={{
              ...iconStyles,
              color:
                location.pathname === icon.link
                  ? activeIconColor
                  : defaultIconColor,
            }}
          >
            {icon.icon}
          </span>
        </a>
      ))}
    </Container>
  )
}