import styled from "styled-components"

export const Container = styled.div`

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GRADIENT};

  padding: 32px;
  border-radius: 20px;
  z-index: 2;

  p {
    margin-bottom: 12vh;
  }

  @media screen and (min-width: 769px) {
    p {
      margin-bottom: 8vh;
    }
  }
`