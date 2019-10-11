import styled from "styled-components";
import CartWrapper from './styles/CartWrapper';
import CloseCartButton from './styles/CloseCartButton';
import CartItem from './CartItem';
const SubTotal = styled.div`
  font-family: sans-serif;
`;

const Taxes = styled.div`
  font-family: sans-serif;
`;

const Total = styled.div`
  font-family: sans-serif;
`;



const Cart = props => {
  const { subtotalPrice, totalPrice, totalTax, lineItems } = props.checkout;
  const { removeLineItemInCart,updateQuantityInCart } = props;

  const renderLineItems = () => {
    return lineItems.map(lineItem => {
      return (
        <CartItem lineItem={lineItem} removeLineItemInCart={removeLineItemInCart} updateQuantityInCart={updateQuantityInCart}/>
      );
    });
  };
  return (
    <CartWrapper>
      <CloseCartButton onClick={props.cartHandler}>X</CloseCartButton>
      {renderLineItems()}
      <SubTotal>
        <h2>SubTotal</h2>
        <span>${subtotalPrice}</span>
      </SubTotal>
      <Taxes>
        <h2>Taxes</h2>
        <span>${totalTax}</span>
      </Taxes>
      <Total>
        <h2>Total</h2>
        <span>${totalPrice}</span>
      </Total>
      <button>CHECK OUT</button>
    </CartWrapper>
  );
};

export default Cart;
