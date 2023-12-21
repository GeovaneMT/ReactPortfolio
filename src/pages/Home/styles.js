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

      > div {
        position: relative;
        background: ${({ theme }) => theme.COLORS.BACKGROUND};
        width: 240px;
        height: 240px;
        border-radius: 50%;
        overflow: hidden;
        box-shadow: -16px 16px 32px 0px #020f20;

        &::before {
          content: "";
          position: absolute;
          inset: -1rem 8rem;
          background: linear-gradient(
            315deg,
            ${({ theme }) => theme.COLORS.BACKGROUND},
            ${({ theme }) => theme.COLORS.BLUE},
            ${({ theme }) => theme.COLORS.BACKGROUND}
          );
          transition: all 0.3s ease-in-out;
          animation: animate 4s linear infinite;
        }

        &::after {
          content: "";
          position: absolute;
          inset: 0.4rem;
          background: ${({ theme }) => theme.COLORS.BACKGROUND};
          border-radius: 50%;
        }

        > div {
          position: absolute;
          inset: 1rem;
          border: 0.4rem solid ${({ theme }) => theme.COLORS.BLUE};
          border-radius: 50%;
          z-index: 3;

          > img {
            position: absolute;
            inset: 0;
            width: 100%;
            border-radius: 50%;
            object-fit: cover;
            pointer-events: none;
          }
        }
      }

      &:last-child {
        background: none;
        margin-top: 0;
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
      gap: 0px;
      width: 100%;
      justify-content: space-evenly;
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
  @keyframes animate {
    from {
      transform: rotate(0deg);
    }

    to {
      transform: rotate(360deg);
    }
  }
`