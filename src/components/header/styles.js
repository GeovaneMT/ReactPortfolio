import styled from "styled-components"

export const Container = styled.h2`
  font-size: clamp(36px, 6vw, 40px);
  font-weight: normal;

  color: ${({ theme }) => theme.COLORS.WHITE};

  > span {
    font-size: clamp(40px, 7vw, 48px);
    font-weight: bold;
    color: ${({ theme }) => theme.COLORS.CYAN};
  }
`