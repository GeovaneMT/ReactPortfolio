import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

  /* Width and height of the scrollbar track */
  ::-webkit-scrollbar {
    width: 1.2rem;
    background: ${({ theme }) => theme.COLORS.CYAN};
    border: 5px solid ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100px;
    background: ${({ theme }) => theme.COLORS.BLUE};
  }
  
  /* On hover, color of the scrollbar thumb */
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

    > div > div {

      > :nth-child(1) {
        animation: showContent .4s ease-in-out forwards;
        opacity: 0;
      }
      > :nth-child(2) {
        animation: showContent .4s .4s ease-in-out forwards;
        opacity: 0;
      }
      > :nth-child(3) {
        animation: showContent .4s .8s ease-in-out forwards;
        opacity: 0;
      }
      > :nth-child(4) {
        animation: showContent .4s 1.2s ease-in-out forwards;
        opacity: 0;
      }
      > :nth-child(5) {
        animation: showContent .4s 1.6s ease-in-out forwards;
        opacity: 0;
      }

      > main {
        > :nth-child(1) {
          animation: showContent .4s ease-in-out forwards;
          opacity: 0;
        }
        > :nth-child(2) {
          animation: showContent .4s .4s ease-in-out forwards;
          opacity: 0;
        }
        > :nth-child(3) {
          animation: showContent .4s .8s ease-in-out forwards;
          opacity: 0;
        }
        > :nth-child(4) {
          animation: showContent .4s 1.2s ease-in-out forwards;
          opacity: 0;
        }
        > :nth-child(5) {
          animation: showContent .4s 1.6s ease-in-out forwards;
          opacity: 0;
        }
      }
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
    text-decoration: none
  }

  a, button {
    cursor: pointer;
    transition: filter 0,2s;
  }

  a:hover, button:hover {
    filter: brightness(0.9)
  }
  
  #buttons {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`
