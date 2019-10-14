import { useState } from "react";
import styled from "styled-components";

const SizeWrapper = styled.div`
  margin: calc(2vmin);
`;
const SizeSelector = ({ size, setSize, variants }) => {
  //default variant is the first one
  const sizeChangeHandler = event => {
    //console.log(event.target.value," this fired!");
    setSize(event.target.value);
  };
  return (
    <SizeWrapper>
      <select onChange={sizeChangeHandler} value={size} className="size">
        {variants.map(value => {
          return (
            <option key={value.id} value={value.id}>
              {value.title}
            </option>
          );
        })}
      </select>
    </SizeWrapper>
  );
};

const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: calc(2vmin);

  button {
    padding: 2.5px 5px;
    border-radius: 3px;
  }
`;

const QuantitySelector = ({ quantity, setQuantity }) => {
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
      <label htmlFor="qty">QTY</label>
      <button onClick={quantityRemove}>-</button>
      <span>{quantity}</span>
      <button onClick={quantityAdd}>+</button>
    </QuantityWrapper>
  );
};

const ShopperOptions = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  font-family: sans-serif;
  #qty {
    border-radius: 5px;
  }

  .size {
    padding: calc(3vmin);
    max-width: 150px;
  }
`;

const Controls = styled.div`
  display:flex;
  flex-direction:column;
  text-align:center;
`

const ProductOptions = ({ variants, addVariantToCart }) => {
  const [size, setSize] = useState(variants[0].id);
  const [quantity, setQuantity] = useState(0);
  return (
    <Controls>
      <ShopperOptions>
        <SizeSelector size={size} variants={variants} setSize={setSize} />
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </ShopperOptions>
      <button onClick={() => addVariantToCart(size, quantity)}>
        Add to Cart
      </button>
    </Controls>
  );
};
export default ProductOptions;
