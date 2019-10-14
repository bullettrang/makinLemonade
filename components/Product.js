import styled from "styled-components";
import ProductOptions from "./styles/ShopperOptions";
const ProductWrapper = styled.div`
text-align: center;
`;

const ProductInfo = styled.div`
    display:flex;
    flex-direction:column;
    line-height:1.8em;

    font-size:.8rem;
`;

const Product = ({product,addVariantToCart})=>{
  console.log(product)
    return(
        <ProductWrapper>
        <img src={product.images[0].src} alt={product.title} />
        <ProductInfo>
          <h1>{product.title}</h1>
          <p>{product.description}</p>
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