import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 32px 0;
  height: 100%;
  overflow: hidden;

  > p {
    padding-bottom: 32px;
  }

  > main {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;
    overflow-y: scroll;
    padding: 0 0 120px;
    gap: 40px;
    overflow: hidden;
  }

  > div {
    position: fixed;
    bottom: 32px;
    transform: translateX(-50%);
    left: 50%;
  }
`