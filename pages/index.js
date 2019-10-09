import { useState } from "react";
import styled from "styled-components";
import LandingStyled from "../components/styles/Landing";
//import CurvedText from '../components/styles/CurvedText';
import Cart from "../components/styles/Cart";
import ShopperOptions from "../components/styles/ShopperOptions";

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;

  img {
    width: 250px;
  }
`;

const SizeSelector = props => {
  //needs onChange Handler
  const [size, setSize] = useState(props.variants[0].title);

  const sizeChangeHandler = event => {
    console.log(event.target.value," this fired!");
    setSize(event.target.value);
  };
  return (
    <select onChange={sizeChangeHandler} value={size} id="size">
      {props.variants.map(value => {
        return (
          <option key={value.id} value={value.id}>
            {value.title}
          </option>
        );
      })}
    </select>
  );
};

const QuantitySelector = props => {
  const [quantity, setquantity] = useState(0);

  const quantityChangeHandler = event => {
    //console.log("this fired!");
    setquantity(event.target.value);
  };
  return (
    <>
    <label htmlFor="qty">
      Quantity
    </label>
    <input id="qty" type="number" min="0" max="10" placeholder="0"/>
    </>
  );
};



const Index = props => {
  const { products,cartHandler,isCartOpen } = props;
  //console.log(products)
  return (
    <div>
      <LandingStyled backgroundImage={`url(${"/static/landing-main.png"})`}>
        
      </LandingStyled>
      {isCartOpen? <Cart/>:null}
      <GalleryWrapper>
        {products.map(product => {
          return product.availableForSale ? (
            <div key={product.id}>
              <h1>{product.handle}</h1>
              <h2>{product.description}</h2>
              <img src={product.images[0].src} />
              <div>{`$ ${product.variants[0].price}`}</div>
              <ShopperOptions>
                <SizeSelector variants={product.variants} />
                <QuantitySelector options={product.options} />
                <button onClick={cartHandler}>Add to Cart</button>
              </ShopperOptions>
            </div>
          ) : null;
        })}
      </GalleryWrapper>
    </div>
  );
};
export default Index;
