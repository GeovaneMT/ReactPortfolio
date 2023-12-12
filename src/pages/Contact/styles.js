import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 32px 120px 32px;
  height: 100vh;

  > p {
    padding-bottom: 32px;
  }

  > main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    overflow-y: auto;
    padding: 0 0 120px;
    height: 100%;
  }

  > div {
    position: fixed;
    bottom: 32px;
    transform: translateX(-50%);
    left: 50%;
  }
`