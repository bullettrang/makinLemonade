import { useState } from "react";
import styled from "styled-components";
import Quantity from './ItemOptions/Quantity';
import AddButton from './ItemOptions/AddButton';
import Size from './ItemOptions/Size';



const OptionsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  font-family: sans-serif;
`;
const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom:1em;
`;



const ProductControls = ({ variants, addVariantToCart }) => {
  const [size, setSize] = useState(variants[0].id);
  const [quantity, setQuantity] = useState(0);
  return (
    <ControlsWrapper>
      <OptionsWrapper>
        <Size size={size} variants={variants} setSize={setSize} />
        <Quantity quantity={quantity} setQuantity={setQuantity} />
      </OptionsWrapper>
      <AddButton onClick={() => addVariantToCart(size, quantity)}>ADD</AddButton>
    </ControlsWrapper>
  );
};
export default ProductControls;
