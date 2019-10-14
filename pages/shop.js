import GalleryWrapper from "../components/styles/Gallery";
import Product from "../components/Product";
import Featured from "../components/styles/Featured";
const Shop = props => {
    const {
        products,
        addVariantToCart,
      } = props;
  return (
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
  );
};

export default Shop;