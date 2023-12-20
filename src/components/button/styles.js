import styled from "styled-components"
import { keyframes } from "styled-components"

const showContent = keyframes`
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    display: flex;
    width: inherit;
  }
`

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GRADIENT};
  display: flex;
  align-items: center;
  gap: 2.4vw;
  width: 75%;
  height: 5.6rem;
  margin: 1.6rem auto 0;
  border-radius: 20px;
  filter: opacity(1);

  &:hover:before {
    opacity: 1;
  }

  &::before,
  &::after {
    border-radius: inherit;
    content: "";
    opacity: 0;
    position: absolute;
    inset: 0;
  }

  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      ${({ theme }) => theme.COLORS.CYAN},
      transparent 40%
    );
    filter: opacity(0.2);
    z-index: 3;
  }

  &::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      ${({ theme }) => theme.COLORS.WHITE},
      transparent 40%
    );
    z-index: 1;
  }

  > a {
    position: absolute;
    inset: 2px;
    z-index: 2;
    border-radius: inherit;
    background: ${({ theme }) => theme.COLORS.GRADIENT};
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    gap: 2.4vw;
    padding: 0 3.2rem;
    height: 100%;
    transition: all 0.3s ease-in-out;
    width: 100%;
    animation: ${showContent} 0.3s ease-in-out forwards;
  }

  span {
    z-index: 3;
  }

  p {
    transition: all 0.3s ease-in-out;
    opacity: 1;
    display: block;
    z-index: 3;

    &:last-child {
      display: none;
      opacity: 0;
    }
  }

  &:hover {
    &::after {
      animation: ${showContent} 0.3s ease-in-out forwards;
      display: none;
    }

    p {
      transition: all 0.3s ease-in-out;
      display: none;
      opacity: 0;

      &:last-child {
        display: block;
        opacity: 1;
      }
    }

    > a {
      display: none;
    }

    > a::before {
      content: "";
      display: block;
      opacity: 1;
      position: absolute;
      inset: 0;
      border-radius: inherit;
      animation: ${showContent} 0.3s ease-in-out forwards;
      background: ${({ theme }) => theme.COLORS.BACKGROUND};
    }
  }

  @media screen and (min-width: 769px) {
    width: 100%;
  }
`