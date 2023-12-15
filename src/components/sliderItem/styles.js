import styled from "styled-components"

export const Container = styled.div`
  > div {
    display: flex;
    place-content: center;
    width: 12rem;
    height: 12rem;
    border-radius: 20px;
    border: 2px solid white;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.3);
    }
  }

  &.styled {
    animation: showContent 1s ease-in-out 0.6s forwards;
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
      transform: translateX(0);
      filter: blur(0);
    }
  }
`
