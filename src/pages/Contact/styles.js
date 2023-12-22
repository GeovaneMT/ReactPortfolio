import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    > main > div:nth-child(2) {
      display: grid;
      grid-template-rows: 2fr 1fr;
      grid-template-areas:
        "child2 child1 child1"
        "child2 child3 child4";
      gap: 20px;

      &:hover > button:after {
        opacity: 1;
      }

      &:last-child > p {
        margin-bottom: 4vh;
      }
      
      button {
        &:nth-child(1) {
          grid-area: child1;
          height: 100%;
        }
        &:nth-child(2) {
          height: 100%;
          grid-area: child2;
        }
        &:nth-child(3) {
          grid-area: child3;
        }
        &:nth-child(4) {
          grid-area: child4;
        }
      }
    }
  }
`
