import React, { Component } from "react";
import Meta from "./Meta";
import styled from "styled-components";
import Header from "./Header";
import Cart from '../components/Cart';
const StyledPage = styled.div`
  background: white;
  color: "#393939";
  box-sizing: border-box;
`;

const Inner = styled.div`
  /* margin:0 auto; */
  /* box-sizing:border-box; */
`;
export default class Page extends Component {
  render() {
    const {cartHandler}=this.props;
    return (
      <StyledPage>
        <Meta /> {/*Uses Next's Head */}
        <Header cartHandler={cartHandler}/> {/*Uses Next's Router, Link */}
        <style jsx global>{`

          * { box-sizing: border-box; margin: 0; padding: 0 }
        `}</style>
        <Inner>{this.props.children}</Inner>
      </StyledPage>
    );
  }
}
