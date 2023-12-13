import styled from "styled-components"

export const Container = styled.h2`
  font-size: ${({ theme }) => theme.COLORS.FSTITLE};

  font-weight: normal;

  color: ${({ theme }) => theme.COLORS.WHITE};

  > span {
    font-weight: bold;
    font-size: ${({ theme }) => theme.COLORS.FSTITLE};
    color: ${({ theme }) => theme.COLORS.CYAN};
  }
`