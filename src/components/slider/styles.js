import styled from "styled-components"

export const Container = styled.div`
  border-radius: 20px;
  text-align: left;

  > p {
    text-align: left;
  }

  main {
    display: flex;
    width: max-content;

    > div:nth-child(1) {
      pointer-events: none;

      > div {
        transform: scale(1.3) translateY(-13.5rem);
      }

      > main {
        display: flex;
        flex-direction: column;
        gap: 4rem;
      }
    }

    > div:nth-child(2),
    > div:nth-child(3),
    > div:nth-child(4) {
      > div {
        filter: opacity(0.5);
        margin-left: 2rem;
      }

      &:hover > div {
        transform: scale(1.3);
        filter: opacity(1);
      }
    }
  }

  .item {
    width: 12rem;
    height: 12rem;
    margin: 25rem 1.4rem 1.4rem 1.4rem;
    cursor: pointer;
  }
`