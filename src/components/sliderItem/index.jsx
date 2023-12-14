import React from "react" // Import React
import { Container } from "./styles"
import reactjs from "../../assets/Icons/reactjs.svg"

export const Item = ({
  icon = reactjs,
  title = "React ",
  text1 = "Tecnologia Front End para ",
  span1 = "Modularização de Componentes ",
  br1 = true,
  text2 = "e com bibliotecas de estilização como ",
  span2 = "Styled Components ",
  br2 = false,
  text3 = "e ",
  span3 = "Vite",
  br3 = false,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <main>
        <div> {title}</div>
        <div>
          {text1}
          <span>{span1}</span>
          {br1 ? <br /> : null}
          {text2}
          <span>{span2}</span>
          {br2 ? <br /> : null}
          {text3}
          <span>{span3}</span>
          {br3 ? <br /> : null}
        </div>
      </main>
      <div>
        <img src={icon} alt={title} />
        {/* Add alt attribute for accessibility */}
      </div>
    </Container>
  )
}