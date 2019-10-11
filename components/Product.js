import styled from "styled-components";
import ProductOptions from "./styles/ShopperOptions";
const ProductWrapper = styled.div`
text-align: center;
`;

const ProductInfo = styled.div`
    display:flex;
    flex-direction:column;
    line-height:1.8em;
`;

const Product = ({product,addVariantToCart})=>{
    return(
        <ProductWrapper>
        <img src={product.images[0].src} alt={product.handle} />
        <ProductInfo>
          <h1>{product.handle}</h1>
          <h4>{product.description}</h4>
          <span>{`$ ${product.variants[0].price}`}</span>
        </ProductInfo>
        <ProductOptions
          addVariantToCart={addVariantToCart}
          variants={product.variants}
          options={product.options}
        />
      </ProductWrapper>
    )
}

export default Product;