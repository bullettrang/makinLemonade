import styled from "styled-components";

//todo : add close button to cart

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
  z-index: 1;
  padding:calc(3vmin); 
  .cart-closed {
    transform: translateX(0%);
  }
`;

const SubTotal = styled.div`
  font-family: sans-serif;
`;


const Taxes = styled.div`
  font-family: sans-serif;
`;

const Total = styled.div`
  font-family: sans-serif;
`;

const CloseButton = styled.span`
  position:absolute;
  left:75%;
  color:pink;
  background-color:orange;
  padding:1em;
  cursor: pointer;
`;
const Cart = props => {
  return (
    <CartStyled>
      <CloseButton onClick={props.cartHandler}>X</CloseButton>
      <SubTotal>
        <h2>SubTotal</h2>
        <span>{props.subTotal}</span>
      </SubTotal>
      <Taxes>
        <h2>Taxes</h2>
        <span>{props.taxes}</span>
      </Taxes>
      <Total>
        <h2>Total</h2>
        <span>{props.total}</span>
      </Total>
    </CartStyled>
  );
};

export default Cart;
