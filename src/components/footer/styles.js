import styled from "styled-components"

export const Container = styled.div`

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GRADIENT};

  margin: 8rem 0 0;
  padding: 32px;
  border-radius: 20px;
  z-index: 2;

  p {
    margin-bottom: 12vh;
  }

  @media screen and (min-width: 769px) {
    p {
      margin: 0;
    }
  }
`