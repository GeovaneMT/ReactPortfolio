import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  #education,
  #tools,
  #techs,
  #languages {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  #content {
    display: flex;
    flex-direction: row;
    gap: 4px;
    align-items: center;
  }

  #Section {
    background-color: ${({ theme }) => theme.COLORS.BLUE};
    display: flex;
    height: 48px;
    padding: 8px;
    justify-content: space-around;
    align-items: center;
    flex: 1 0 0;
    border-radius: 8px;
    box-shadow: 0px 5px 10px 0px ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  p {
    margin: 16px auto 8px;
    width: 100%;
    text-align: start;
  }

  #inside {
    margin: 0;
    text-align: center;
    font-size: clamp(14px, 4vw, 16px);

  }

  #education div:nth-child(2),
  #tools div:nth-child(3),
  #tools div:nth-child(4),
  #techs div:nth-child(3),
  #techs div:nth-child(4) {
    height: 72px;
  }

  #tools div:nth-child(2),
  #tools div:nth-child(5),
  #techs div:nth-child(2),
  #techs div:nth-child(5),
  #education div {
    height: 56px;
  }

  #education div:nth-child(1),
  #tools div:nth-child(1),
  #techs div:nth-child(1),
  #tools div:nth-child(2),
  #techs div:nth-child(2),
  #tools div:nth-child(3),
  #techs div:nth-child(3) {
    border-radius: 8px 0px 0px 8px;
  }

  #education div:nth-child(3),
  #tools div:nth-child(4),
  #techs div:nth-child(4),
  #tools div:nth-child(5),
  #techs div:nth-child(5),
  #tools div:nth-child(6),
  #techs div:nth-child(6) {
    border-radius: 0px 8px 8px 0px;
  }
`