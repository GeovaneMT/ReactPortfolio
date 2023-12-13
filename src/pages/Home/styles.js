import styled from 'styled-components'
import background from "../../assets/images/BG.png"


export const Container = styled.div`
  height: 100%;
  overflow: hidden;
  background: ${({ theme }) => theme.COLORS.BGGRADIENT};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${background});
    background-size: cover;
    filter: opacity(0.5);
    z-index: -1;
    overflow: hidden;
  }

  li {
    display: flex;
    gap: 4px;
  }

  li,
  h2 {
    text-shadow: 0px 4px 4px #020f20;
  }

  li svg {
    filter: drop-shadow(0px 4px 4px #020f20);
    color: ${({ theme }) => theme.COLORS.CYAN};
  }

  > main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 3.2rem 21rem;
    gap: 80px;
    align-items: center;
    background-image: url({background});
  }

  > div {
    position: fixed;
    bottom: 32px;
    transform: translateX(-50%);
    left: 50%;
  }

  .pic img {
    width: 240px;
    border-radius: 50%;
    box-shadow: -16px 16px 32px 0px #020f20;
  }
`