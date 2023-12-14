import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  margin: 4px;
  width: 120px;
  height: 120px;
  border-radius: 12px;
  //opacity: 0;
  cursor: pointer;

  main {
    flex-direction: column;
    width: 300px;
    text-align: left;
    padding: 0;
    color: #eee;
    //display: none;

    div {
      opacity: 0;
      animation: showContent 1s ease-in-out forwards;
    }

    div:nth-child(1) {
      font-size: ${({ theme }) => theme.COLORS.FSTITLE};
      font-weight: bold;
    }

    div:nth-child(2) {
      display: block;
      margin: 20px 0;
      width: 100%;
      animation-delay: 0.2s;
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

  div {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
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
