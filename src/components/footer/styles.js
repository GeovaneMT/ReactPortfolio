import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLUE};

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: calc(75% - 8vw);
  height: 5.6rem;
  padding: 1.6rem 3.2rem;
  border: 0;
  border-radius: 4rem;
  margin: 0 auto;
  filter: drop-shadow(0px 4px 4px #020f20);

  svg {
    filter: drop-shadow(0px 4px 4px #020f20);
  }
`