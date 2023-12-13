import styled from 'styled-components'

export const Container = styled.div`
  padding: 32px 32px 120px 32px;
  height: 100vh;

  > main {
    display: flex;
    flex-direction: column;
    gap: 80px;
    overflow-y: auto;
    overflow-x: hidden;
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