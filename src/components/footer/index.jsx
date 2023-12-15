import React from "react"
import { useLocation } from "react-router-dom"
import { StyleSheetManager } from "styled-components"

import theme from "../../styles/theme"
import { Container } from "./styles"

import {
  PiHouseLine,
  PiInfo,
  PiGear,
  PiUser
} from "react-icons/pi"

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
  ]

  const iconStyles = React.useMemo (() => ({fontSize: iconSize}),[iconSize])

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "iconColor"}>
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
    </StyleSheetManager>
  )
}