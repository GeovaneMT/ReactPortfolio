import { Container } from "./styles"

export const Header = ({ className, text = '', span = '', ...rest}) => {

  return <Container
  className={className}
  {...rest}
  >
  {text} 
  <br />
  <span>{span}</span>
  
  </Container>
}
