import App from "next/app"; //this wraps around all
import Page from "../components/Page";
import Client from "shopify-buy";
import Header from '../components/Header';
//sometimes I need to restart nextjs to see my changes
const client = Client.buildClient({
  // storefrontAccessToken: "c6fd602fd95dcddd412fe21b7a813794",
  // domain: "makinlemonade.myshopify.com"
  //domain: "makinlemonade.myshopify.com"
  storefrontAccessToken: process.env.STORE_FRONT_ACCESS_TOKEN,
  domain: process.env.DOMAIN
});

class MyApp extends App {
  //next provides an App automatically, but we made our own called MyApp
  constructor(props) {
    super(props);

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {}
    };
    console.log(props.initialState);
  }
  componentDidMount() {
    //create checkout
    this.fetchCheckout();

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

  createNewCart = () => {
    return client.checkout
      .create()
      .then(res => {
        this.setState({
          checkout: res
        });
        localStorage.setItem("checkoutId", res.id);
      })
      .catch(error => console.log(error));
  };

  fetchCheckout = () => {
    let checkoutId = localStorage.getItem("checkoutId");
    if (checkoutId) {
      // We have a checkoutId, let's see if it has been completed
      return client.checkout
        .fetch(checkoutId)
        .then(remoteCart => {
          // The checkout was not completed, grab its contents
          if (remoteCart.completedAt === null) {
            this.setState({
              checkout: remoteCart
            });
          } else {
            // The checkout was completed, remove the localStorage item
            // Start from scratch
            localStorage.removeItem("checkoutId");
            this.createNewCart();
          }
        })
        .catch(error => {
          // While the cart ID exists, the checkout has expired.
          // So we need to clear out localStorage and create a new cart.
          localStorage.removeItem("checkoutId");
          this.createNewCart();
        });
    } else {
      // There was no checkoutId, so we'll start from scratch
      this.createNewCart();
    }
  };

  openCheckout = () => {
    window.open(this.state.checkout.webUrl);
  };

  addVariantToCart = (variantId, quantity) => {
    this.setState({
      isCartOpen: true
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;
    return client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(res => {
        console.log(res);
        this.setState({
          checkout: res
        });
      });
  };

  updateQuantityInCart = (lineItemId, quantity) => {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) }
    ];

    return client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then(res => {
        this.setState({
          checkout: res
        });
      });
  };

  removeLineItemInCart = async lineItemId => {
    const checkoutId = this.state.checkout.id;

    const res = await client.checkout.removeLineItems(checkoutId, [lineItemId]);
    this.setState({
      checkout: res
    });
  };

  cartHandler = () => {
    this.setState(prevState => {
      return { isCartOpen: !prevState.isCartOpen };
    });
  };

  render() {
    const { products, isCartOpen, checkout, client } = this.state;
    const { Component, pageProps } = this.props; //Next's App has a component prop

    return (
      <Page>
        <Header cartHandler={this.cartHandler}/> {/*Uses Next's Router, Link */}
        {/*Consists of Head */}
        <Component
          addVariantToCart={this.addVariantToCart}
          removeLineItemInCart={this.removeLineItemInCart}
          updateQuantityInCart={this.updateQuantityInCart}
          checkoutHandler={this.openCheckout}
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
