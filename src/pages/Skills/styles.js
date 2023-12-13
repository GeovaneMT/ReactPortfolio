import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  > p {
    padding-bottom: 32px;
  }

  > main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 3.2rem 21rem;
    gap: 80px;
  }

  > div {
    position: fixed;
    bottom: 32px;
    transform: translateX(-50%);
    left: 50%;
  }
`