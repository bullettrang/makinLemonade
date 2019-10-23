import styled from "styled-components";
import ProductOptions from "./styles/ShopperOptions";
const ProductWrapper = styled.div`
  text-align: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1.8em;
  font-size: 0.8rem;
  font-family: sans-serif;
`;

const Product = ({ product, addVariantToCart }) => {
  return (
    <ProductWrapper>
      <img src={product.images[0].src} alt={product.title} />
      <ProductInfo>
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <span>
          <strong>{`$ ${product.variants[0].price}`}</strong>
        </span>
      </ProductInfo>
      <ProductOptions
        addVariantToCart={addVariantToCart}
        variants={product.variants}
        options={product.options}
      />
    </ProductWrapper>
  );
};

export default Product;
