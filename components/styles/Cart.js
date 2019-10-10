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
  padding: calc(3vmin);
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
  position: absolute;
  left: 75%;
  color: pink;
  background-color: orange;
  padding: 1em;
  cursor: pointer;
`;

const CartImage = styled.img`
  max-width:50px;
`
const Cart = props => {
  const { subtotalPrice, totalPrice, totalTax, lineItems } = props.checkout;
  console.log(lineItems)
  const renderLineItems = () => {
    return lineItems.map(lineItem => {
      return (
        <li key={lineItem.id}>
          {lineItem.variant.image && (
            <CartImage src={lineItem.variant.image.src} alt={lineItem.title} />
          )}
          <div>{lineItem.title}</div>
          <div>QTY: {lineItem.quantity}</div>
          <div>${(lineItem.quantity * lineItem.variant.price).toFixed(2)}</div>
        </li>
      );
    });
  };
  return (
    <CartStyled>
      <CloseButton onClick={props.cartHandler}>X</CloseButton>
      <ul>{renderLineItems()}</ul>
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
    </CartStyled>
  );
};

export default Cart;
