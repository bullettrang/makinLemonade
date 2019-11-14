import styled from 'styled-components'
import HeaderContainer from '../components/styles/Header/HeaderContainer';
import NavBar from './styles/Header/NavBar/NavBar';

const CartLinkWrapper = styled.div`
  padding-top: 4em;
  margin-right: 2em;
  margin-left: auto;
  cursor: pointer;
`;

const withButton = InnerComponent => props => {
  return (
    <CartLinkWrapper style={props.styling} onClick={props.cartHandler}>
      <InnerComponent {...props} />
    </CartLinkWrapper>
  );
};


const HyperLinks = [
  { title: "home", href: "/" },
  { title: "about", href: "/about" },
  { title: "instagram", href: "/instagram" }
];

const CartIcon = (props)=>{
  return(
    <img src={props.source}/>
  )
}

const CartButton = withButton(CartIcon);



const Header = props => (
  <HeaderContainer>
    <NavBar hyperlinks={HyperLinks} logo={"/static/logo.jpg"}/>
    <CartButton source={"/static/cart_major_monotone.svg"} cartHandler={props.cartHandler} styling={{width:"50px"}}/>
  </HeaderContainer>
);

export default Header;
