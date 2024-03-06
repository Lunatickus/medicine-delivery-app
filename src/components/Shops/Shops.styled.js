import styled from "styled-components";

export const ShopsStyled = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  overflow: auto;
  width: 300px;
  height: 630px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .shops-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .shops-select {
    height: 90%;
    background-color: white;
    border-color: transparent;
    outline: transparent;
  }

  .shops-select::-webkit-scrollbar {
    width: 0;
  }

  .shops-select::-webkit-scrollbar-thumb {
    width: 0;
  }

  .shops-option {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    width: 230px;
    height: 60px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
  }

  .shops-option:not(:last-child) {
    margin-bottom: 10px;
  }

  .shops-option:checked {
    background-color: lightgray;
  }
`;
