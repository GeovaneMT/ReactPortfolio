import styled from "styled-components"

export const Container = styled.div`
  border-radius: 20px;

  p {
    text-align: left;
  }

  span {
    font-style: italic;
    color: ${({ theme }) => theme.COLORS.CYAN};
  }

  #slide {
    display: flex;
    margin-left: 12vw;
    width: max-content;
  }

  .name {
    color: ${({ theme }) => theme.COLORS.CYAN};
  }
  .item {
    margin: 4px;
    width: 120px;
    height: 120px;
    border-radius: 12px;
    opacity: 0;
  }

  .item:nth-child(1) .content {
    display: block;
  }

  .item:nth-child(1),
  .item:nth-child(2),
  .item:nth-child(3),
  .item:nth-child(4) {
    margin: 250px 0 0 0;
  }

  .item .content {
    transform: translateY(-250px);
    display: block;
    width: 300px;
    text-align: left;
    padding: 0;
    color: #eee;
    display: none;
    height: 300px;
    width: 300px;
    margin-left: -12vw;
  }

  .item .content button {
    border-radius: 40px;
  }

  .item .name {
    font-size: ${({ theme }) => theme.COLORS.FSTITLE};

    font-weight: bold;
    opacity: 0;
    animation: showcontent 1s ease-in-out 1 forwards;
  }
  .item .des {
    margin: 20px 0;
    opacity: 0;
    width: 100%;
    animation: showcontent 1s ease-in-out 0.2s 1 forwards;
  }
  .item button {
    padding: 10px 20px;
    border: none;
    opacity: 0;
    animation: showcontent 1s ease-in-out 0.4s 1 forwards;
  }

  .styled {
    animation: showcontent 1s ease-in-out 0.6s 1 forwards;
  }

  .styledBackwards {
    animation: showBackwards 1s ease-in-out 0.6s 1 forwards;
  }

  .buttons {
    opacity: 0;
    display: flex;
    text-align: center;
    justify-content: space-between;
    height: 15%;
    transform: translate(-0%, -150%);
    width: calc(100vw - 4.4rem);
  }

  .buttons button {
    width: 10%;
    height: 100%;
    transition: 0.5s;
    background-color: ${({ theme }) => theme.COLORS.WHITE_50};
  }

  .buttons button:nth-child(1) {
    border-radius: 0 10px 10px 0;
  }

  .buttons button:nth-child(2) {
    border-radius: 10px 0px 0px 10px;
  }

  .buttons button:hover {
    background-color: ${({ theme }) => theme.COLORS.CYAN};
  }

  .icon img {
    width: 80%;
  }

  .icon {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
  }

  .item:nth-child(1) img {
    transform: scale(1.3) translateY(-238px);
  }

  .item:nth-child(2) img,
  .item:nth-child(3) img,
  .item:nth-child(4) img {
    filter: opacity(0.5);
  }

  .hover-button {
    color: ${({ theme }) => theme.COLORS.BACKGROUND};
  }

  .hover-button:hover {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @keyframes showcontent {
    from {
      opacity: 0;
      transform: translate(100px, 0);
      filter: blur(33px);
    }

    to {
      opacity: 1;
      transform: translate inherit;
      filter: blur(0);
    }
  }

  @keyframes showBackwards {
    from {
      opacity: 0;
      transform: translate(-100px, 0);
      filter: blur(33px);
    }

    to {
      opacity: 1;
      transform: translate inherit;
      filter: blur(0);
    }
  }
`
