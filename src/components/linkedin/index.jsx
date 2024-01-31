import React from "react"
import { Link } from "react-router-dom"
import { Container } from "./styles"

export const Linkedin = ({...rest}) => {
  
  return (
    <Container>
      <Link
      to="www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=gmtgeovane"
      target="_blank"
      {...rest}
      >
        Linkedin
      </Link>
    </Container>
  )
}