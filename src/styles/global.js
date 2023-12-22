import { createGlobalStyle } from "styled-components"
import { keyframes } from "styled-components"

const showContent = keyframes`
  from {
    opacity: 0;
    transform: translateX(100px);
    filter: blur(33px);
  }
  to {
    opacity: 1;
    transform: translateX(inherit);
    filter: blur(0);
  }
`

export default createGlobalStyle`
  ::-webkit-scrollbar {
    width: 1.2rem;
    background: ${({ theme }) => theme.COLORS.CYAN};
    border: 5px solid ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: ${({ theme }) => theme.COLORS.BLUE};
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.CYAN};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: 1;
      pointer-events: none;
      overflow: hidden;
      background: ${({ theme }) => theme.COLORS.BGGRADIENT};
    }

    > div > div > *,
    > div > div > main > * {
      opacity: 0;
      animation: ${showContent} 0.4s ease-in-out forwards;
    }

    > div > div > main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 8vw 8vh;
    gap: 80px;
    }

  }

  body, html, #root {
    height: 100%;
    margin: 0;
  }

  body, input, button, textarea {
    font-family: 'Plus Jakarta Sans', serif;
    font-size: ${({ theme }) => theme.COLORS.FSBODY};
    outline: none;
  }

  a {
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  a:hover, button:hover {
    transform: scale(1.03);
    transition: all 0.3s ease-in-out;
  }

  #buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @function index() {
    $i: 0;
    @while $i < 100 {
      @return $i;
      $i: $i + 1;
    }
  }

  @media screen and (min-width: 769px) {
    body > div > div > main {
    padding: 0 13vw 12vh 8vw ;
    }
  }
`
