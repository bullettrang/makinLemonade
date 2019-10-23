import styled from "styled-components";
import CartWrapper from './styles/CartWrapper';
import CloseCartButton from './styles/CloseCartButton';
import CartItem from './CartItem';
const SubTotal = styled.div`
  
`;

const Taxes = styled.div`

`;

const Total = styled.div`

`;



const Cart = props => {
  const { subtotalPrice, totalPrice, totalTax, lineItems } = props.checkout;
  const { removeLineItemInCart,updateQuantityInCart,checkoutHandler } = props;

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
      <button onClick={checkoutHandler}>CHECK OUT</button>
    </CartWrapper>
  );
};

export default Cart;
