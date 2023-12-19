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
    align-items: center;
    background-image: url({background});

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 80px;

      > img {
        width: 240px;
        border-radius: 50%;
        box-shadow: -16px 16px 32px 0px #020f20;
      }

      > ul {
        width: max-content;
      }
    }

    > :nth-child(1),
    > :nth-child(2),
    > :nth-child(3) {
      animation: showContent 0.4s ease-in-out forwards;
      opacity: 0;
    }

    > :nth-child(2) {
      animation-delay: 0.4s;
    }

    > :nth-child(3) {
      animation-delay: 0.8s;
    }
  }

  @media screen and (min-width: 769px) {
    > main > div {
        flex-direction: row;
      }
    }

  @keyframes showContent {
    from {
      opacity: 0;
      transform: translate(100px, 0);
      filter: blur(33px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
      filter: blur(0);
    }
  }
`