import styled, { keyframes } from "styled-components"

export const Container = styled.div`
  border-radius: 20px;
  text-align: left;

  main {
    display: flex;
    width: max-content;
  }

  .item {
    margin: 4px;
    width: 120px;
    height: 120px;
    border-radius: 12px;
    opacity: 0;
    cursor: pointer;

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
`