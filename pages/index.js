import { useState } from "react";
import styled from "styled-components";
import LandingStyled from "../components/styles/Landing";
//import CurvedText from '../components/styles/CurvedText';
import Cart from "../components/styles/Cart";
import GalleryWrapper from "../components/styles/Gallery";
import ProductOptions from "../components/styles/ShopperOptions";


const Index = props => {
  const { products, cartHandler, isCartOpen, addVariantToCart,checkout } = props;
  //console.log(products)
  return (
    <div>
      <LandingStyled
        backgroundImage={`url(${"/static/landing-main.png"})`}
      ></LandingStyled>
      {isCartOpen ? <Cart checkout={checkout} cartHandler={cartHandler} /> : null}
      <GalleryWrapper>
        {products.map(product => {
          return product.availableForSale ? (
            <div key={product.id}>
              <h1>{product.handle}</h1>
              <h2>{product.description}</h2>
              <img src={product.images[0].src} />
              <div>{`$ ${product.variants[0].price}`}</div>
              <ProductOptions
                addVariantToCart={addVariantToCart}
                variants={product.variants}
                options={product.options}
              />
            </div>
          ) : null;
        })}
      </GalleryWrapper>
    </div>
  );
};
export default Index;
