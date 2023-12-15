import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  border-radius: 20px;
  text-align: left;

  > p {
    text-align: left;
  }

  main {
    display: flex;
    width: max-content;

    > div > div {
      display: flex;
      place-content: center;
      width: 12rem;
      height: 12rem;
      border-radius: 20px;
      border: 2px solid white;
    }

    > div:nth-child(1) {
      pointer-events: none;
      > div {
        animation-delay: 0.2s;
        transform: scale(1.3) translateY(-13.5rem);
      }
      > main {
        display: flex;
        flex-direction: column;
        gap: 4rem;
      }
    }

    > div:nth-child(2) > div,
    > div:nth-child(3) > div,
    > div:nth-child(4) > div {
      filter: opacity(0.5);
      margin-left: 2rem;
    }
  }

  .item {
    width: 12rem;
    height: 12rem;
    margin: 25rem 4px 4px 4px;
    opacity: 0;
    cursor: pointer;
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