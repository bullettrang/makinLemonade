import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 2em;
  margin-bottom:calc(5vmin);
`;

const StyledLogo = styled.img`
  width: 150px;
  height: 150px;
  padding-left: 8em;
  padding-right: 8em;
`;

const StyledLinkWrapper = styled.div`
  padding-top: 4em;
  text-align: center;
`;
const linkStyle = {
  color: "#76B251",
  textTransform: "uppercase"
};

const Header = () => (
  <StyledHeader>
    <StyledLinkWrapper>
      <Link href="/">
        <a style={linkStyle}>Home</a>
      </Link>
    </StyledLinkWrapper>
    <StyledLogo src={"/static/logo.jpg"} />
    <StyledLinkWrapper>
      <Link href="/about">
        <a style={linkStyle}>About</a>
      </Link>
    </StyledLinkWrapper>
  </StyledHeader>
);

export default Header;
