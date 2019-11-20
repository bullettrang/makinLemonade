import LandingStyled from "../components/styles/Landing";
import Cart from "../components/Cart";
import GalleryWrapper from "../components/styles/Gallery";
import Product from "../components/Product";
import Featured from "../components/styles/Featured";

const Index = props => {
  const {
    products,
    cartHandler,
    isCartOpen,
    addVariantToCart,
    checkout,
    removeLineItemInCart,
    updateQuantityInCart,
    checkoutHandler
  } = props;
  //console.log(products)
  return (
    <div>
      <LandingStyled
        backgroundImage={`url(${"/static/icecream.jpg"})`}
      />
      {isCartOpen ? (
        <Cart
          checkout={checkout}
          checkoutHandler={checkoutHandler}
          cartHandler={cartHandler}
          removeLineItemInCart={removeLineItemInCart}
          updateQuantityInCart={updateQuantityInCart}
        />
      ) : null}
      <section>
        <Featured>
          <h2>Featured</h2>
        </Featured>
        <GalleryWrapper>
          {products.map(product => {
            return product.availableForSale ? (
              <Product
                key={product.id}
                addVariantToCart={addVariantToCart}
                product={product}
              />
            ) : null;
          })}
        </GalleryWrapper>
      </section>
    </div>
  );
};
export default Index;
