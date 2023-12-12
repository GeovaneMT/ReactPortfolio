import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    border: none;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;

}

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
  }

  body, html, #root {
  height: 100%;
  margin: 0;
}

  body, input, button, textarea {

    font-family: 'Plus Jakarta Sans', serif;
    font-size: clamp(14px, 4vw, 16px);
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
