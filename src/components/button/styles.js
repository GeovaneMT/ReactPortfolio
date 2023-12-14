import styled from "styled-components"

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.GRADIENT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  align-items: center;

  gap: 2.4vw;

  width: 75%;
  height: 5.6rem;

  padding: 0 3.2rem;
  margin-top: 1.6rem;
  
  border-radius: 40px;

  &:disabled {
    opacity: 0.5;
  }
`
