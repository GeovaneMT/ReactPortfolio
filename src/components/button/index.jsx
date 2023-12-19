import React from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"

export const Button = ({
  title = "Ir Para",
  icon = "",
  loading = false,
  iconSize = "2.4rem",
  iconColor = "white",
  to = "",
  ...rest
}) => {
  const iconStyles = {
    fontSize: iconSize,
    color: iconColor,
  }

  const buttonOrLink = to ? (
    <Container disabled={loading}>
      <Link to={to} {...rest}>
        <span style={iconStyles}>{icon}</span>
        {loading ? "Carregando..." : title}
      </Link>
    </Container>
  ) : (
    <Container type="button" disabled={loading} {...rest}>
      <span style={iconStyles}>{icon}</span>
      {loading ? "Carregando..." : title}
    </Container>
  )

  return buttonOrLink
}
