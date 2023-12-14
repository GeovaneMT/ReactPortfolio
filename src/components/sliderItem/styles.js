import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  margin: 4px;
  width: 120px;
  height: 120px;
  border-radius: 12px;
  opacity: 0;
  cursor: pointer;

  &.styled {
    animation: showContent 1s ease-in-out 0.6s forwards;
  }

  main {
    flex-direction: column;
    width: 300px;
    text-align: left;
    padding: 0;
    color: #eee;
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
