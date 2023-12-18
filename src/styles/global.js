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

    > div > div,
    > div > div > main {

      > * {
        opacity: 0;
        animation: showContent .4s ease-in-out forwards;
      }

      > :nth-child(2) {
        animation-delay: 0.2s;
      }
      > :nth-child(3) {
        animation-delay: 0.4s;
      }
      > :nth-child(4) {
        animation-delay: 0.6s;
      }
      > :nth-child(5) {
        animation-delay: 0.8s;
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

    @keyframes showContent {
    from {
      opacity: 0;
      transform: translate(100px, 0);
      filter: blur(33px);
    }

    to {
      opacity: 1;
      transform: translateX(inherit);
      filter: blur(inherit);
    }
  }
`
