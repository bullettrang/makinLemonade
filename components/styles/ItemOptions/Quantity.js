import styled from "styled-components";

const QuantityWrapper = styled.div`
  /* display: flex;
  flex-direction: row; */
  margin: calc(2vmin);
  margin-bottom:2em;
  span {
    width:15px;
    padding:0 15px;
    border:1px solid #ddd;
  }
  .qty-adjust{
    cursor: pointer;
  }
`;

const Quantity = ({ quantity, setQuantity }) => {
  const quantityAdd = () => {
    setQuantity(quantity + 1);
  };

  const quantityRemove = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  };
  return (
    <QuantityWrapper>
      {/* <label htmlFor="qty">QTY</label> */}
      <span className="qty-adjust" onClick={quantityRemove}>-</span>
      <span>{quantity}</span>
      <span className="qty-adjust" onClick={quantityAdd}>+</span>
    </QuantityWrapper>
  );
};

export default Quantity;