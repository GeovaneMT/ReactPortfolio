import styled from "styled-components"

export const Container = styled.div`
  > main {
    width: 300px;
    transform: translateY(-250px);
    display: none;

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
    opacity: 0;
  }

  &.styled {
    > main {
      div {
        animation: showContent 0.4s ease-in-out forwards;
      }

      div:nth-child(2) {
        animation-delay: 0.2s;
      }
    }

    > div {
      opacity: 0;
      animation: showContent 0.4s 0.4s ease-in-out forwards;
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

  p {
    text-align: left;
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
