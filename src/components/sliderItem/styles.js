import styled from "styled-components"

export const Container = styled.div`
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
      div:nth-child(1) {
        animation: showContent 0.4s ease-in-out forwards;
      }
      div:nth-child(2) {
        animation: showContent 0.4s 0.2s ease-in-out forwards;
      }
    }

    > div {
      opacity: 0;
      animation: showbtn 0.4s 0.4s ease-in-out forwards;
    }
  }

  main {
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

  @keyframes showContent {
    from {
      opacity: 0;
      transform: translate(100px, 0);
      filter: blur(33px);
    }

    to {
      opacity: 1;
      transform: translateX(inherit);
      filter: blur(0);
    }
  }

  @keyframes showbtn {
    from {
      filter: blur(33px);
      opacity: 0;
    }

    to {
      filter: blur(inherit);
      opacity: 1;
    }
  }
`
