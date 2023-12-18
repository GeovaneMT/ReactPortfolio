import styled from "styled-components"

export const Container = styled.div`

  p {
    text-align: left;
  }

  > main {
    display: flex;

    > div:first-child {
      pointer-events: none;
      margin-top: 50px;

      > div {
        margin-left: 0;
        filter: opacity(1);
        transform: scale(1.3);
      }

      > main {
        display: flex;
      }
    }
  }
`