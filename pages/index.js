import LandingStyled from "../components/styles/Landing";
import styled from "styled-components";

const LandingContent = styled.div`
  /* top: 30%;
  left: 7%;
  position: absolute; */
  display: flex;
  flex-direction: column;
  padding:calc(3vmin);
`;
const SplashText = styled.span`
  font-family: sans-serif;
  /* color:#fcee21; */
  color: #231f20;
  text-transform: uppercase;
  font-size: 3.5rem;
  letter-spacing: 1.5rem;

  text-align:center;
`;

const ShopWrapper = styled.div`
  padding-top: calc(10vmin);
  margin: 0 auto;
  :active {
    transform: translateY(1px);
  }
`;
const ShopNow = styled.button`
  border-radius: 25px;
  /* color:white; */
  /* color:#231f20; */
  color: #231f20;
  /* background-color:skyblue; */
  color: rgb(252, 227, 115);
  background-color: #231f20;
  padding: calc(1.5vmin) calc(3vmin);
  margin-top:calc(5vmin + 30px);
  font-size: 2rem;
  transition: all 1s;
  :hover {
    background-color: pink;
  }
`;

const Hero = styled.div`
  
  padding:calc(2vmin);
  background-color: #231f20;
  box-shadow: -16px 16px 0 0 #231f20;;
  img{
    width:100%;
    height:auto;
  }
`;

const HeroContainer=styled.div`
display:grid;
grid-template-columns:1fr 1fr;
`

const Index = props => {
  //console.log(products)
  return (
    <div>
      <LandingStyled backgroundImage={`url(${"/static/blur_lift_land.jpg"})`}>
        <HeroContainer>
        <LandingContent>
          <SplashText>Makin Lemonade</SplashText>
          <ShopWrapper>
            <ShopNow>Shop Now</ShopNow>
          </ShopWrapper>
        </LandingContent>
        <Hero>
          <img src="/static/landing-mustard.jpg"/>
        </Hero>
        </HeroContainer>
        
      </LandingStyled>
    </div>
  );
};
export default Index;
