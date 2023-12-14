import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  border-radius: 20px;
  text-align: left;

  span {
    font-style: italic;
    color: ${({ theme }) => theme.COLORS.CYAN};
  }

  #slide {
    display: flex;
    width: max-content;
  }

  .name,
  .des {
    opacity: 0;
    animation: showContent 1s ease-in-out forwards;
  }

  .name {
    font-size: ${({ theme }) => theme.COLORS.FSTITLE};
    font-weight: bold;
  }

  .item {
    margin: 4px;
    width: 120px;
    height: 120px;
    border-radius: 12px;
    opacity: 0;
    cursor: pointer;

    &.styled {
      animation: showContent 1s ease-in-out 0.6s forwards;
    }

    &:nth-child(1) {
      margin: 250px 0 0 0;

      .content {
        display: block;
        transform: translateY(-250px);
      }

      img {
        transform: scale(1.3) translateY(-238px);
      }
    }

    &:nth-child(2),
    &:nth-child(3),
    &:nth-child(4) {
      margin: 250px 0 0 0;

      img {
        filter: opacity(0.5);
      }
    }
  }

  .content {
    width: 300px;
    text-align: left;
    padding: 0;
    color: #eee;
    display: none;
    height: 300px;
    width: 300px;
  }

  .des {
    margin: 20px 0;
    width: 100%;
    animation-delay: 0.2s;
  }

  .icon {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;

    img {
      width: 80%;
    }
  }

  @keyframes showContent {
    from {
      opacity: 0;
      transform: translate(100px, 0);
      filter: blur(33px);
    }

    to {
      opacity: 1;
      transform: translateX(0);
      filter: blur(0);
    }
  }
`
