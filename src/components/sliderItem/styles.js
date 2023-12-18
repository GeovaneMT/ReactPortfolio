import styled, { keyframes } from "styled-components"

const showContent = keyframes`
  from {
    filter: blur(33px);
  }
  to {
    filter: blur(0);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  width: 12rem;
  margin: 30rem 1.4rem 1.4rem 1.4rem;
  cursor: pointer;

  > main {
    display: none;
    flex-direction: column;
    gap: 4rem;
    width: 300px;

    div:nth-child(1) {
      font-size: ${({ theme }) => theme.COLORS.FSTITLE};
      color: ${({ theme }) => theme.COLORS.CYAN};
      justify-content: start;
      font-weight: bold;
      opacity: 0;
    }

    div:nth-child(2) {
      opacity: 0;
    }
  }

  > div {
    display: flex;
    place-content: center;
    align-items: center;
    width: 12rem;
    height: 12rem;
    border-radius: 20px;
    border: 2px solid white;
    transition: all 0.3s ease-in-out;
    filter: opacity(0.5);
    margin-left: 2rem;

    &:hover {
      transform: scale(1.3);
      filter: opacity(1);
      transition: all 0.3s ease-in-out;
    }
  }

  &.styled {
    > main {
      div {
        animation: ${showContent} 0.4s ease-in-out forwards;
      }

      div:nth-child(2) {
        animation-delay: 0.2s;
      }
    }

    > div {
      animation: ${showContent} 0.4s 0.4s ease-in-out forwards;
    }

    &:nth-child(n + 2) > div {
      animation-delay: 0.6s;
    }

    &:nth-child(n + 3) > div {
      animation-delay: 0.8s;
    }

    &:nth-child(n + 4) > div {
      animation-delay: 1s;
    }

    &:nth-child(n + 5) > div {
      animation-delay: 1.2s;
    }
  }

  span {
    font-style: italic;
    color: ${({ theme }) => theme.COLORS.CYAN};
  }

  img {
    width: 80%;
    height: 80%;
    object-fit: contain;
  }
`
