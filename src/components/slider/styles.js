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

  > main > div:nth-child(2) > div,
  > main > div:nth-child(3) > div,
  > main > div:nth-child(4) > div {
    filter: opacity(0.5);
    margin-left: 2rem;
  }

  > main > div:nth-child(1) > div, 
  > main > div:nth-child(2) > div, 
  > main > div:nth-child(3) > div,
  > main > div:nth-child(4) > div { 
    border-radius: 20px;
  }

  > main > div > div {
    display: flex;
    place-content: center;
    width: 12rem;
    height: 12rem;
    border: 2px solid white;
  }

  > main > div:nth-child(1) > main {
    display: flex;
    flex-direction: column;
    gap: 4rem;
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