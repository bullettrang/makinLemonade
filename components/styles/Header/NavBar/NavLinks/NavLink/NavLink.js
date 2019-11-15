import styled from "styled-components";
import Link from 'next/link'

export const StyledLinkWrapper = styled.div`
  padding: 0 calc(3vmin);
  padding-top: 3em;
`;

const linkStyle = {
  color: "#76B251",
  fontWeight: "800",
  textTransform:"uppercase"
};

const NavLink=(props)=>{
  return(
    <StyledLinkWrapper>
      <Link href={props.href}>
        <a style={linkStyle}>{props.title}</a>
      </Link>
    </StyledLinkWrapper>
  )
}

export default NavLink;