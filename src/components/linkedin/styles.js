import styled from "styled-components"

export const Container = styled.button`

  background: none;

  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20rem;
    height: 3.2rem;
    border-radius: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: #0A66C2;
  }
      
`
