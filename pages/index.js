import LandingStyled from "../components/styles/Landing";
import Cart from "../components/Cart";
import GalleryWrapper from "../components/styles/Gallery";
import Product from '../components/Product';

const Index = props => {
  const  {
    products,
    cartHandler,
    isCartOpen,
    addVariantToCart,
    checkout,
    removeLineItemInCart,
    updateQuantityInCart
  } = props;
  //console.log(products)
  return (
    <div>
      <LandingStyled
        backgroundImage={`url(${"/static/icecream.jpg"})`}
      ></LandingStyled>
      {isCartOpen ? (
        <Cart
          checkout={checkout}
          cartHandler={cartHandler}
          removeLineItemInCart={removeLineItemInCart}
          updateQuantityInCart={updateQuantityInCart}
        />
      ) : null}
      <GalleryWrapper>
        {products.map(product => {
          return product.availableForSale ? (
              <Product key={product.id} addVariantToCart={addVariantToCart} product={product}/>
          ) : null;
        })}
      </GalleryWrapper>
    </div>
  );
};
export default Index;
