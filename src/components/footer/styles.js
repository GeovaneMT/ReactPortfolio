import styled from "styled-components"

export const Container = styled.div`
  background: ${({ theme }) => theme.COLORS.BLUE};

  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 75%;
  height: 56px;
  padding: 16px 32px;
  border: 0;
  border-radius: 40px;
  margin: 0 auto;
`