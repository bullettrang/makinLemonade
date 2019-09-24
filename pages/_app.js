import App from "next/app"; //this wraps around all
import Page from "../components/Page";
import Client from "shopify-buy";

//sometimes I need to restart nextjs to see my changes
const client = Client.buildClient({
  storefrontAccessToken: "c6fd602fd95dcddd412fe21b7a813794",
  domain: "makinlemonade.myshopify.com"
});

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
    client.checkout.create().then(res => {
      //console.log(res);
      this.setState({
        checkout: res
      });
    });

    client.product.fetchAll().then(products => {
      // Do something with the products
      console.log(products);
      this.setState({ products: products });
    });

    client.shop.fetchInfo().then((res) => {
        this.setState({
          shop: res,
        });
      });
  }



  render() {
    const { products } = this.state;
    const { Component, pageProps } = this.props; //Next's App has a component prop
    return (
      <Page>
        {" "}
        {/*Consists of Head */}
        <Component products={products} client={client} {...pageProps} />{" "}
      </Page>
    );
  }
}

export default MyApp;
