import { useState } from "react";
import styled from "styled-components";
import LineItem from './LineItem';
import CartWrapper from './CartWrapper';
import CloseCartButton from './CloseCartButton';

const SubTotal = styled.div`
  font-family: sans-serif;
`;

const Taxes = styled.div`
  font-family: sans-serif;
`;

const Total = styled.div`
  font-family: sans-serif;
`;



const CartImage = styled.img`
  max-width: 50px;
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
          <button
            className="line--delete"
            onClick={() => removeLineItemInCart(lineItem.id)}
          >
            X
          </button>
          <div className="lineItem--title">
            {" "}
            {lineItem.variant.title} {lineItem.title}{" "}
          </div>
          {/* <div className="lineItem--variant-title"></div> */}
          <div className="lineItem--qty">QTY</div>
          <div className="lineItem--qty--controls">
            <button>-</button>
            <input type="text" value={lineItem.quantity} />
            <button>+</button>
          </div>
          <div className="lineItem--total">
            ${(lineItem.quantity * lineItem.variant.price).toFixed(2)}
          </div>
        </LineItem>
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
