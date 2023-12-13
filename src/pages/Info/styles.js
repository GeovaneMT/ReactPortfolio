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
    padding: 0 3.2rem 21rem;
    gap: 80px;
  }

  > div {
    position: fixed;
    bottom: 32px;
    transform: translateX(-50%);
    left: 50%;
  }

  .text {
    flex-direction: column;
    border-radius: 20px;
  }

  .text span {
    font-weight: bold;
    font-size: ${({ theme }) => theme.COLORS.FSSPAN};
    color: ${({ theme }) => theme.COLORS.CYAN};
  }

  .text,
  .contentPage div {
    display: flex;
    gap: 12px;
    padding: 8%;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  .box,
  .background {
    display: flex;
    justify-content: space-evenly;
  }

  .box {
    flex-direction: column;
  }

  .box p {
    text-align: left;
  }

  .contentPage {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 20px;
    width: max-content;
    align-items: center;
  }

  .contentPage div {
    border-radius: calc(20px - 12px);
    width: max-content;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  .contentPage p {
    width: 50%;
    color: ${({ theme }) => theme.COLORS.WHITE_50};
  }

  .contentPage span {
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: ${({ theme }) => theme.COLORS.FSSPAN};
  }
`