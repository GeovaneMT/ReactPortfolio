import styled from "styled-components"

export const Container = styled.button`
  background: ${({ theme }) => theme.COLORS.GRADIENT};
  color: ${({ theme }) => theme.COLORS.WHITE};

  display: flex;
  gap: 24px;
  align-items: center;
  width: 75%;
  height: 56px;
  border: 0;
  padding: 0 32px;
  margin-top: 16px;
  border-radius: 40px;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`
