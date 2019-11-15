import styled from 'styled-components';
import HeaderLogo from '../Logo/Logo';
import NavLinks from './NavLinks/NavLinks';

const NavWrapper = styled.div`
  display: flex;
  margin-left: calc(15vmin);
`;

const NavBar = (props)=>{
  return(
    <NavWrapper>
      <HeaderLogo src={props.logo} />
      <NavLinks hyperlinks={props.hyperlinks}/>
    </NavWrapper>
  )
}

export default NavBar;

