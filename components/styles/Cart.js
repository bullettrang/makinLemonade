import styled from "styled-components";

//todo : add close button to cart

const CartStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 350px;
  background-color: white;
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
  max-width: 50px;
`;

const LineItem = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-gap: 20px;
  padding:calc(3vmin);
  border-bottom: 1px solid rgb(118, 178, 81);
  .lineItem--qty{
    grid-column-start:1;
    grid-column-end:2;
  }

.line--delete{
  width:25px;
  height:25px;
  border-radius:3px;
  box-shadow: 0px 1px 2px 0px;
  position:relative;
  left:-65%;
}

`;

const Cart = props => {
  const { subtotalPrice, totalPrice, totalTax, lineItems } = props.checkout;
  const { removeLineItemInCart } = props;
  const renderLineItems = () => {
    return lineItems.map(lineItem => {
      return (
        <LineItem key={lineItem.id}>
          {lineItem.variant.image && (
            <CartImage src={lineItem.variant.image.src} alt={lineItem.title} />
          )}
          <button className="line--delete" onClick={() => removeLineItemInCart(lineItem.id)}>X</button>
          <div className="lineItem--title"> {lineItem.variant.title} {lineItem.title} </div>
          {/* <div className="lineItem--variant-title"></div> */}
          <div className="lineItem--qty">QTY: {lineItem.quantity}</div>
          <div className="lineItem--total">${(lineItem.quantity * lineItem.variant.price).toFixed(2)}</div>
        </LineItem>
      );
    });
  };
  return (
    <CartStyled>
      <CloseButton onClick={props.cartHandler}>X</CloseButton>
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
    </CartStyled>
  );
};

export default Cart;
