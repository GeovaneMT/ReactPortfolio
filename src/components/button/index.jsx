import React from "react"
import { Container } from "./styles"

export const Button = ({
  title = "This is a button",
  icon = "",
  loading = false,
  iconSize = "24px",
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