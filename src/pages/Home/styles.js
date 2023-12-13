import styled from 'styled-components'
import background from "../../assets/images/BG.png"


export const Container = styled.div`
  padding: 32px 32px 0;
  height: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: url(${background});
    background-size: cover;
    filter: opacity(0.5);
    z-index: -1;
  }

  > main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: scroll;
    padding: 0 0 120px;
    gap: 80px;
    align-items: center;
    overflow-x: hidden;
    background-image: url({background});
  }

  > div {
    position: fixed;
    bottom: 32px;
    transform: translateX(-50%);
    left: 50%;
  }

  .pic img {
    width: 240px;
    border-radius: 50%;
    box-shadow: -16px 16px 32px 0px #020f20;
  }
`