import styled from "styled-components"

export const Container = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: clamp(14px, 4vw, 16px);

  font-weight: normal;
  opacity: 50%;
  text-align: center;
`
