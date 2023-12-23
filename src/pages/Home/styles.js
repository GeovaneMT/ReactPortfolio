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
    padding-bottom: 0;
    > p:first-child {
      position: fixed;
      margin-left: -8vw;
      width: 100%;
    }

    gap: 0;
    > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 14vh 0 0 0;
      gap: 4vh;
      margin-left: -8vw;
      margin-right: -13vw;
      background: linear-gradient(
        180deg,
        rgba(2, 15, 32, 0),
        rgba(2, 15, 32, 1) 90%
      );

      > div {
        &:last-child {
          display: flex;
          height: 24rem;
          flex-direction: column;
          justify-content: space-evenly;
        }

        &:first-child {
          position: relative;
          width: 24rem;
          height: 24rem;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: -16px 16px 32px 0px #020f20;

          &::before {
            content: "";
            position: absolute;
            inset: -1rem 0rem;
            background: linear-gradient(
              315deg,
              ${({ theme }) => theme.COLORS.BACKGROUND},
              ${({ theme }) => theme.COLORS.BACKGROUND},
              ${({ theme }) => theme.COLORS.BACKGROUND},
              ${({ theme }) => theme.COLORS.BACKGROUND},
              ${({ theme }) => theme.COLORS.BLUE},
              ${({ theme }) => theme.COLORS.CYAN},
              ${({ theme }) => theme.COLORS.BLUE},
              ${({ theme }) => theme.COLORS.BACKGROUND},
              ${({ theme }) => theme.COLORS.BACKGROUND},
              ${({ theme }) => theme.COLORS.BACKGROUND},
              ${({ theme }) => theme.COLORS.BACKGROUND}
            );
            animation: animate 4s linear infinite;
          }

          > div {
            position: absolute;
            inset: 0.8rem;

            > img {
              width: 100%;
              border-radius: 50%;
            }
          }
        }
      }

      > ul {
        width: max-content;
      }
    }

    > section {
      padding: 14vh 13vw 0 8vw;
      margin-left: -8vw;
      margin-right: -13vw;
      display: flex;
      gap: 8rem;
      flex-direction: column;
      background: ${({ theme }) => theme.COLORS.BACKGROUND};

      > div {
        display: flex;
        flex-direction: column;
        gap: 8rem;

        > div:nth-child(2) {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.6vh;
          width: 100%;
        }
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
    > main {
      > div:nth-child(2) {
        padding-top: 16vh;
        padding-bottom: 16vh;
        flex-direction: row;
        justify-content: center;
        gap: 8vw;
      }

      > section {
        padding-bottom: 0;

        > div > div:nth-child(2) {
          display: grid;
          grid-template-rows: 2fr 1fr;
          grid-template-areas:
            "child2 child1 child1"
            "child2 child3 child4";
          gap: 20px;
        }
      }

      &:hover > button:after {
        opacity: 1;
      }

      &:last-child > p {
        margin-bottom: 4vh;
      }

      button {
        &:nth-child(1) {
          grid-area: child1;
          height: 100%;
        }
        &:nth-child(2) {
          height: 100%;
          grid-area: child2;
        }
        &:nth-child(3) {
          grid-area: child3;
        }
        &:nth-child(4) {
          grid-area: child4;
        }
      }
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