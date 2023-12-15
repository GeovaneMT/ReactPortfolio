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
  }

  > main > div:nth-child(1) > div {
    animation-delay: 0.2s;
    transform: scale(1.3) translateY(-13.5rem);
  }

  > main > div > div {
    display: flex;
    place-content: center;
  }

  > main > div:nth-child(1) > main {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }

  .item {
    width: 120px;
    height: 120px;
    margin: 250px 4px 4px 4px;
    opacity: 0;
    cursor: pointer;

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      img {
        filter: opacity(0.5);
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
`