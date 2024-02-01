import styled from "styled-components"
import { Sansation } from "../../styles/fonts"

export const Container = styled.div`
  ${Sansation}
  height: 100%;
  overflow: hidden;

  & > main > div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &:not(:last-child) > p {
      text-align: left;
      font-family: ${({ theme }) => theme.FONT.HIGHLIGHTS};

      &:nth-child(2) {
        > span {
        }
      }
    }
  }

  > main > div:nth-child(2) {
    flex-direction: column;
    border-radius: 20px;
    display: flex;
    gap: 12px;
    padding: 8%;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
  }
`