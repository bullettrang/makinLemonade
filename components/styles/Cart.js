import styled from "styled-components";

const CartStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background-color: white;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #e5e5e5;
  /* transform: translateX(100%); */
  transform: translateX(0%);
  transition: transform 0.15s ease-in-out;
  z-index:1;
  .cart-closed{
    transform: translateX(0%);
  }
`;

export default CartStyled;