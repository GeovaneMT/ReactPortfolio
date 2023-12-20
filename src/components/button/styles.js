import styled from "styled-components"

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GRADIENT};

  display: flex;
  align-items: center;

  gap: 2.4vw;

  width: 75%;
  height: 5.6rem;

  padding: 0 3.2rem;
  margin: 1.6rem auto 0;

  border-radius: 20px;

  filter: opacity(1);

  p {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    display: block;

    &:last-child {
      display: none;
      opacity: 0;
    }
  }

  &:hover {
    p {
      transition: all 0.3s ease-in-out;
      display: none;
      opacity: 0;

      &:last-child {
        display: block;
        opacity: 1;
      }
    }
  }

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};

    display: flex;
    align-items: center;
    gap: 2.4vw;
    padding: 0 3.2rem;
    width: 100%;
  }

  @media screen and (min-width: 769px) {

    > a {
      height: 100%;
    }
  }
`
