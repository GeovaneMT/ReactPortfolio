import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    > main > div {
      display: grid;
      grid-template-rows: 2fr 1fr;
      grid-template-areas:
        "child2 child1 child1"
        "child2 child3 child4";
      gap: 20px;

      &:hover > button:after {
        opacity: 1;
      }

      &:last-child > p {
        margin-bottom: 4vh;
      }

      > button {
        width: 100%;
        background: ${({ theme }) => theme.COLORS.BACKGROUND};

        &:hover:before {
          opacity: 1;
        }

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

        &::before,
        &::after {
          border-radius: inherit;
          content: "";
          opacity: 0;
          position: absolute;
          inset: 0;
        }

        &::before {
          background: radial-gradient(
            800px circle at var(--mouse-x) var(--mouse-y),
            ${({ theme }) => theme.COLORS.CYAN},
            transparent 40%
          );
          filter: opacity(0.2);
          z-index: 3;
        }

        &::after {
          background: radial-gradient(
            600px circle at var(--mouse-x) var(--mouse-y),
            ${({ theme }) => theme.COLORS.WHITE},
            transparent 40%
          );
          z-index: 1;
          opacity: 0;
        }

        > a {
          inset: 2px;
          position: absolute;
          background: ${({ theme }) => theme.COLORS.GRADIENT};
          z-index: 2;
          border-radius: inherit;
        }
      }
    }
  }
`
