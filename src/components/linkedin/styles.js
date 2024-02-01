import styled from "styled-components"
import { Sansation } from "../../styles/fonts"

export const Container = styled.button`
  ${Sansation}

  background: none;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20rem;
    height: 3.2rem;
    border-radius: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT.HIGHLIGHTS};
    background-color: #0a66c2;
  }
`
