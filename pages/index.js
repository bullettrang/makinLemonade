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
    updateQuantityInCart
  } = props;
  //console.log(products)
  return (
    <div>
      <LandingStyled
        backgroundImage={`url(${"/static/icecream.jpg"})`}
      ></LandingStyled>
    </div>
  );
};
export default Index;
