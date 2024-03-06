import styled from "styled-components";

export const HomeListItemStyled = styled.div`
  position: relative;
  width: 300px;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;
  text-align: end;

  .item-image {
    width: 250px;
    height: auto;
    display: block;
  }

  .item-description-wrapper {
    display: flex;
    justify-content: space-between;
    font-size: 20px;
    margin-bottom: 4px;
  }

  .item-button {
    background-color: lightgray;
    border-radius: 10px;
    font-size: 16px;
    padding: 8px 20px;
  }

  .item-favorite-btn {
    position: absolute;
    right: 30px;
    top: 30px;
    background-color: transparent;
    border: transparent;
    padding: 0;
    line-height: 0;
  }
`;
