import Link from "next/link";
import styled from "styled-components";
import CartIcon from "./CartIcon";
const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: calc(2vmin);
  justify-content: space-between;
  background: ${props => props.backgroundImage};
  background-position: 0 20%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledLogo = styled.img`
  width: 110px;
  height: 110px;
  margin: 0 calc(5vmin + 10px);
  cursor: pointer;
`;

const LinkContainer = styled.span`
  display: flex;
  flex-direction: row;
  padding: 0 calc(5vmin);
  justify-content: flex-start;

  @media (max-width: 650px) {
    display: none;
  }
`;

const StyledLinkWrapper = styled.span`
  padding: calc(5vmin);
  padding-top: calc(6vmin);
  font-size: 2rem;
`;

const AnchorStyled = styled.a`
  color: #fcee21;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  font-family: 'Questrial', sans-serif;
  :hover {
    color: pink;
  }
`;

const Shop = styled.span`
  padding-top: 40px;
  padding-right: 70px;
  &:hover {
    path {
      fill: pink;
    }
  }


`;

const Header = props => {
  const { cartHandler } = props;

  return (
    <StyledHeader backgroundImage={`url(${"/static/hardwood.jpg"})`}>
      <span>
        <Link href="/">
          <StyledLogo src={"/static/logo-trans.png"} />
        </Link>
      </span>

      <LinkContainer className="NavLinks">
        <StyledLinkWrapper>
          <Link href="/shop">
            <AnchorStyled>shop</AnchorStyled>
          </Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <Link href="/about">
            <AnchorStyled>about</AnchorStyled>
          </Link>
        </StyledLinkWrapper>
        <StyledLinkWrapper>
          <Link href="/contact">
            <AnchorStyled>contact</AnchorStyled>
          </Link>
        </StyledLinkWrapper>
      </LinkContainer>
      <Shop onClick={cartHandler}>
        <CartIcon width={"40px"} height={"40px"} fill={"#FCEE21"}  />
      </Shop>
    </StyledHeader>
  );
};

export default Header;
