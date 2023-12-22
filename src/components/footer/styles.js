import styled from "styled-components"

export const Container = styled.div`
  display: flex;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GRADIENT};

  margin: 8rem 0 0;
  padding: 32px;
  border-radius: 20px;

  p {
    margin-bottom: 10vh;
  }
`