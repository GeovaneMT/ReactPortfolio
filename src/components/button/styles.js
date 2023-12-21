import styled from "styled-components"
import { keyframes } from "styled-components"

const showContent = keyframes`
  from {
    opacity: 0;
    width: 0;
  }
  to {
    opacity: 1;
    width: 100%;
  }
`
const hideContent = keyframes`
  from {
    opacity: 1;
    width: 100%;
  }
  to {
    opacity: 0;
    width: 0;
  }
`

export const Container = styled.button`
  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GRADIENT};
  display: flex;
  gap: 2.4vw;
  width: 75%;
  height: 5.6rem;
  margin: 1.6rem auto 0;
  border-radius: 20px;
  filter: opacity(1);

  span {
    z-index: 3;

    svg {
      &:last-child {
        display: none;
        opacity: 0;
      }
    }
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

  &::before {
    content: "";
    border-radius: inherit;
    animation: ${showContent} 0.6s ease-in-out forwards;
    position: absolute;
    inset: 0;
    
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      ${({ theme }) => theme.COLORS.WHITE_50},
      transparent 40%
    );
  }

  > a {
    position: absolute;
    inset: 2px;
    border-radius: inherit;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    gap: 2.4vw;
    padding: 0 3.2rem;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  &:not(:hover) {
    > a {
      background: ${({ theme }) => theme.COLORS.GRADIENT};
    }
  }

  &:hover {
    > a {
      animation: ${showContent} 0.6s ease-in-out forwards;
      transform: scale(1);

      &::after {
        content: "";
        border-radius: inherit;
        inset: 0;
        position: absolute;
        opacity: 0.2;

        background: radial-gradient(
          600px circle at var(--mouse-x) var(--mouse-y),
          ${({ theme }) => theme.COLORS.WHITE_50},
          transparent 40%
        );
      }
    }

    span > svg {
      transition: all 0.3s ease-in-out;
      display: none;
      opacity: 0;

      &:last-child {
        display: block;
        opacity: 1;
      }
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
  }

  @media screen and (min-width: 769px) {
    width: 100%;
  }
`