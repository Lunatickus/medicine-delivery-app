import styled from "styled-components";

export const OrderFormStyled = styled.div`
  .order-form-wrapper {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
  }

  .order-form {
    border: 1px solid black;
    border-radius: 10px;
    padding: 20px;
    width: 700px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }

  .order-form-label {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
  }

  .order-form-input {
    width: 400px;
    font-size: 18px;
    text-align: center;
    padding: 8px;
    border-radius: 10px;
  }

  .order-btn-wrapper {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 400px;
  }

  .order-total-price {
    font-size: 28px;
  }

  .order-submit-btn {
    font-size: 28px;
    background-color: transparent;
    padding: 10px 20px;
    border-radius: 10px;
    margin-right: 20px;
  }
`;
