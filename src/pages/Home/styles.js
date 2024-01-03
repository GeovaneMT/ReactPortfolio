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

  > main {
    gap: 0;
    padding-bottom: 0;

    > p:first-child {
      position: fixed;
      margin-left: -8vw;
      width: 100%;
    }

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

        &:last-child {

          display: flex;
          flex-direction: column;
          gap: 2rem;

          ul {
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