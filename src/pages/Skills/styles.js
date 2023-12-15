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
    padding: 0 8vw 21rem;
    gap: 80px;

    > div:nth-child(2),
    > div:nth-child(4),
    > div:nth-child(6) {
      flex-direction: column;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    padding: 8%;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
      span {
      font-weight: bold;
      font-size: ${({ theme }) => theme.COLORS.FSSPAN};
      color: ${({ theme }) => theme.COLORS.CYAN};
      }
    }
  }
`