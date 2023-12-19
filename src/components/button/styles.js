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
  margin: 1.6rem auto 0;

  border-radius: 20px;
  
  filter: opacity(1);

  &:disabled {
    opacity: 0.5;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    gap: 2.4vw;
    width: 75%;
  }
`
