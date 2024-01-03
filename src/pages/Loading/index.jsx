import React, { useState } from "react"
import { Container } from "./styles"
import { Effect } from "./effect"

export const Loading = () => {
  const [loading, setLoading] = useState(true)

    Effect(setLoading)

  return (
    <Container>
      <div className="loader">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Container>
  )
}