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
    height: 94%;
    overflow-y: scroll;
    padding: 0 0 160px;
    gap: 40px;
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
    font-size: clamp(12px, 4vw, 14px);
    font-weight: bold;
  }

  .text,
  .content div {
    display: flex;
    gap: 12px;
    padding: 8%;
    font-size: clamp(10px, 3vw, 12px);
  }

  .box,
  .background {
    display: flex;
    justify-content: space-evenly;
  }

  .box {
    flex-direction: column;
    gap: 40px;
  }

  .box p {
    text-align: left;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-radius: 20px;
    width: max-content;
    align-items: center;
  }

  .content div {
    border-radius: calc(20px - 12px);
    width: max-content;
    border: 2px solid ${({ theme }) => theme.COLORS.WHITE};
  }

  .content p {
    width: 50%;
    color: ${({ theme }) => theme.COLORS.WHITE_50};
  }

  .content span {
    font-size: clamp(24px, 5vw, 32px);
    display: flex;
    text-align: center;
    width: 100%;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
`