import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.div`
  display:grid;
  grid-template-columns:1fr auto;
  grid-template-rows: 1fr;
  padding-top: 1em;
`;

const NavWrapper = styled.div`
  display: flex;
  margin-left:calc(15vmin);
`;

const StyledLogo = styled.img`
  width: 120px;
  height: 120px;
`;

const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding:calc(5vmin);
  margin-left:calc(40vmin);
`;

const StyledLinkWrapper = styled.div`

  padding:0 calc(3vmin);
  padding-top:3em;
`;
const linkStyle = {
  color: "#76B251",
  fontWeight: "800",
  textTransform:"uppercase"
};

const CartLinkWrapper = styled.div`
  padding-top: 4em;
  margin-right:2em;
  margin-left: auto;
`;

const Header = (props) => (
  <StyledHeader>
    <NavWrapper>
      <StyledLogo src={"/static/logo.jpg"} />
      <LinksWrapper>
        <StyledLinkWrapper>
          <Link href="/">
            <a style={linkStyle}>home</a>
          </Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <Link href="/about">
            <a style={linkStyle}>about</a>
          </Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <Link href="/instagram">
            <a style={linkStyle}>Instagram</a>
          </Link>
        </StyledLinkWrapper>
      </LinksWrapper>
    </NavWrapper>
    <CartLinkWrapper style={{ width: "50px" }} onClick={props.cartHandler}>
      <img src="/static/cart_major_monotone.svg" />
    </CartLinkWrapper>
  </StyledHeader>
);

export default Header;
