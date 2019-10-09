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
  
  const QuantitySelector = ({setQuantity}) => {
    
  
    const quantityChangeHandler = event => {
      //console.log("this fired!");
      setQuantity(event.target.value);
    };
    return (
      <>
      <label htmlFor="qty">
        Quantity
      </label>
      <input id="qty" type="number" min="0" max="10" placeholder="0" onChange={quantityChangeHandler}/>
      </>
    );
  };

const ShopperOptions = styled.div`
    display:flex;
    justify-content:space-around;

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
            <QuantitySelector setQuantity={setQuantity}/>
            <button onClick={()=>addVariantToCart(size,quantity)}>Add to Cart</button>
        </ShopperOptions>
    )
}
export default ProductOptions;