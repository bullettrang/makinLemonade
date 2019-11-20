import HeaderContainer from '../components/styles/Header/HeaderContainer';
import NavBar from './styles/Header/NavBar/NavBar';
import {CartButton} from './styles/Header/CartButton';



const HyperLinks = [
  { title: "home", href: "/" },
  { title: "about", href: "/about" },

];


const Header = props => (
  <HeaderContainer>
    <NavBar hyperlinks={HyperLinks} logo={"/static/logo.jpg"}/>
    <CartButton source={"/static/cart_major_monotone.svg"} cartHandler={props.cartHandler} styling={{width:"50px"}}/>
  </HeaderContainer>
);

export default Header;
