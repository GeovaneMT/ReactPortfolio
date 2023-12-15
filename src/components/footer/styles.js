import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLUE};

  display: flex;
  position: fixed;
  justify-content: space-around;
  align-items: center;
  transform: translateX(-50%);
  width: calc(75% - 8vw);
  height: 5.6rem;
  bottom: 32px;
  left: 50%;
  padding: 1.6rem 3.2rem;
  border-radius: 4rem;
  filter: drop-shadow(0px 4px 4px #020f20);

  svg {
    filter: drop-shadow(0px 4px 4px #020f20);
  }
`