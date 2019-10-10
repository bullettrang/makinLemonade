import {useState} from 'react';
import styled from "styled-components";


const SizeSelector = ({size,setSize,variants}) => {
    //default variant is the first one
    const sizeChangeHandler = event => {
      //console.log(event.target.value," this fired!");
      setSize(event.target.value);
    };
    return (
      <select onChange={sizeChangeHandler} value={size} id="size">
        {variants.map(value => {
          return (
            <option key={value.id} value={value.id}>
              {value.title}
            </option>
          );
        })}
      </select>
    );
  };

  const QuantityWrapper=styled.div`
    display:flex;
    flex-direction:row;
  `;
  
  const QuantitySelector = ({quantity,setQuantity}) => {
    
    const quantityChangeHandler = event => {
      //console.log("this fired!");
      setQuantity(event.target.value);
    };

    const quantityAdd =()=>{
        setQuantity(quantity+1);
    }

    const quantityRemove =()=>{
        if(quantity===0){
            return;
        }
        setQuantity(quantity-1);
    }
    return (
      <QuantityWrapper>
      <label htmlFor="qty">
        QTY 
        </label>
        <button onClick={quantityRemove}>-</button><span>{quantity}</span><button onClick={quantityAdd}>+</button>
      </QuantityWrapper>
    );
  };

const ShopperOptions = styled.div`
    display:flex;
    justify-content:space-around;
    flex-direction:column;
    font-family:sans-serif;
    #qty{
        border-radius:5px;
    }
`;


const ProductOptions=({variants,addVariantToCart})=>{
    const [size, setSize] = useState(variants[0].id);
    const [quantity, setQuantity] = useState(0);
    return(
        <ShopperOptions>
            <SizeSelector size={size} variants={variants} setSize={setSize}/>
            <QuantitySelector quantity={quantity} setQuantity={setQuantity}/>
            <button onClick={()=>addVariantToCart(size,quantity)}>Add to Cart</button>
        </ShopperOptions>
    )
}
export default ProductOptions;