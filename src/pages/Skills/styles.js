import styled from 'styled-components'
import { Sansation } from "../../styles/fonts"

export const Container = styled.div`

  ${Sansation}

  height: 100%;
  overflow: hidden;

  > main {
    > div > p > span {
      font-size: ${({ theme }) => theme.FONTSIZE.FSSPAN};
    }

    > div:nth-child(2),
    > div:nth-child(4),
    > div:nth-child(6) {
      flex-direction: column;
      border-radius: 20px;
      display: flex;
      gap: 12px;
      padding: 8%;
      border: 2px solid ${({ theme }) => theme.COLORS.WHITE};

      > p {
        font-family: ${({ theme }) => theme.FONT.HIGHLIGHTS};
      }
    }
  }
`