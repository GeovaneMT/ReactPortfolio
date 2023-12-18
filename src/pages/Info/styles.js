import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  overflow: hidden;

  > main {
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 8vw 21rem;
    gap: 80px;
  }

  & > main > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  & > main > div > p {
    text-align: left;
    > span {
      font-weight: bold;
      font-size: ${({ theme }) => theme.COLORS.FSSPAN};
      color: ${({ theme }) => theme.COLORS.CYAN};
    }
  }

  > main > div:nth-child(2){
    flex-direction: column;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    padding: 8%;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`