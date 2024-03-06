import styled from "styled-components";

export const CartListItemStyled = styled.div`
display: flex;
gap: 30px;
  width: 650px;
  height: 350px;
  border: 1px solid black;
  border-radius: 10px;
  padding: 10px;

  .cart-list-item {
    width: 350px;
    height: auto;
    display: block;
  }

  .item-content-wrapper {
    width: 100%;
    text-align: center;
    padding: 60px 10px;
  }

  .item-title {
    font-size: 28px;
    margin-bottom: 10px;
  }

  .item-price {
    font-size: 20px;
    margin-bottom: 30px;
  }

  .item-amount {
    width: 100%;
    height: 40px;
    font-size: 20px;
    border-radius: 10px;
    text-align: center;
  }
`;
