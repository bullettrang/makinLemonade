import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: calc(2vmin);
  justify-content:space-between;
  background: ${props => props.backgroundImage};
  background-position: 0 20%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledLogo = styled.img`
  width: 120px;
  height: 120px;
  margin: 0 calc(5vmin + 10px);
`;

const LinkContainer = styled.span`
  display: flex;
  flex-direction: row;
  padding: 0 calc(5vmin);
  justify-content: flex-end;

`;

const StyledLinkWrapper = styled.span`
  padding: calc(5vmin) ;
  font-size:3rem;
`;

const AnchorStyled=styled.a`
  color: #FCEE21;
  font-weight:800;
  text-decoration: none;
  cursor:pointer;

  :hover{
    color:pink;
  }
`

const Header = () => (
  <StyledHeader backgroundImage={`url(${"/static/hardwood.jpg"})`}>
    <span><StyledLogo src={"/static/logo-trans.png"} /></span>

    <LinkContainer className="NavLinks">
      <StyledLinkWrapper>
        <Link href="/">
          <AnchorStyled >home</AnchorStyled>
        </Link>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Link href="/about">
          <AnchorStyled >about</AnchorStyled>
        </Link>
      </StyledLinkWrapper>
      <StyledLinkWrapper>
        <Link href="/contact">
          <AnchorStyled >contact</AnchorStyled>
        </Link>
      </StyledLinkWrapper>
    </LinkContainer>
  </StyledHeader>
);

export default Header;
