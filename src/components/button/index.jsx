import React from "react"
import { Container } from "./styles"

export const Button = ({
  title = "Ir Para",
  icon = "",
  loading = false,
  iconSize = "2.4rem",
  iconColor = "white",
  ...rest
}) => {
    
    const iconStyles = {
    fontSize: iconSize,
    color: iconColor,
  }

  return (
    <Container type="button" disabled={loading} {...rest}>
      <span style={iconStyles}>{icon}</span>
      {loading ? "Carregando..." : title}
    </Container>
  )
}