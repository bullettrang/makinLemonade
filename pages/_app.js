import App from "next/app"; //this wraps around all
import Page from "../components/Page";
import Client from "shopify-buy";

//sometimes I need to restart nextjs to see my changes
const client = Client.buildClient({
  storefrontAccessToken: "c6fd602fd95dcddd412fe21b7a813794",
  domain: "makinlemonade.myshopify.com"
});

// this.state = {
//   isCartOpen: false,
//   checkout: { lineItems: [] },
//   products: [],
//   shop: {}
// };


// this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
// this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
class MyApp extends App {
  //next provides an App automatically, but we made our own called MyApp
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };
  }
  componentDidMount() {
    //create empty checkout
    client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });

    //fetch all products,
    client.product.fetchAll().then(products => {
      this.setState({ products: products });
    });

    //fetch info about store
    client.shop.fetchInfo().then(res => {
      this.setState({
        shop: res
      });
    });
  }

  openCheckout=()=> {
    window.open(this.props.checkout.webUrl);
  }


  addVariantToCart= (variantId, quantity)=> {
    this.setState({
      isCartOpen: true
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;
     return client.checkout.addLineItems(checkoutId, lineItemsToAdd)
      .then(res => {
        this.setState({
          checkout: res
        });
        console.log('from cart ',res);
      });
  }

  cartHandler = () => {
    this.setState(prevState => {
      return { isCartOpen: !prevState.isCartOpen };
    });
  };

  render() {
    const { products, isCartOpen,checkout,client } = this.state;
    const { Component, pageProps } = this.props; //Next's App has a component prop
    return (
      <Page>
        {/*Consists of Head */}
        <Component
          addVariantToCart={this.addVariantToCart}
          isCartOpen={isCartOpen}
          cartHandler={this.cartHandler}
          products={products}
          checkout={checkout}
          client={client}
          {...pageProps}
        />
      </Page>
    );
  }
}

export default MyApp;
