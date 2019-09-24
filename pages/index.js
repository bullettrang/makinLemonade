//import { useEffect } from "react";
import styled from "styled-components";

const LandingStyled = styled.div`
    width:100%;
    height:100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.35)),${props =>
      props.backgroundImage};
    /* background: ${props => props.backgroundImage}; */
    background-size:cover;
    background-repeat:no-repeat;
    position:relative;

    .Curved__Wrapper{
        position:relative;
        transform: rotate(5deg);
        top:8%;
        left:-4%;
    }
    
    path {
        fill: transparent;
    }

    .Landing--Text{
        font-size: 12px;
        fill: white;
        font-family: sans-serif;
        text-transform:uppercase;
        letter-spacing:.45rem;
        font-weight:800;
    }
`;

const LandingTitle = styled.h1`
  font-family: sans-serif;
  color: white;
  position: absolute;
  text-transform: uppercase;
  top: ${props => props.top};
  left: ${props => props.left};
`;

const CurvedText = () => {
  return (
    <svg viewBox="0 0 500 500" className="Curved__Wrapper">
      <path
        id="curve"
        d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
      />
      <text width="500">
        <textPath className="Landing--Text" xlinkHref="#curve">
          Hardship Community Struggle
        </textPath>
      </text>
    </svg>
  );
};

const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;

  img {
    width: 250px;
  }
`;

const Index = props => {
  const { products } = props;
  return (
    <div>
      <LandingStyled backgroundImage={`url(${"/static/icecream.jpg"})`}>
        {/* <LandingTitle top={"23%"} left={"25%"}>
          Community
        </LandingTitle>
        <LandingTitle top={"23%"} left={"50%"}>
          Hardship
        </LandingTitle>
        <LandingTitle top={"23%"} left={"70%"}>
          Struggle
        </LandingTitle> */}
        <CurvedText />
      </LandingStyled>
      <GalleryWrapper>
        {products.map(product => {
          return (
            <div key={product.id}>
              <h1>{product.handle}</h1>
              <h2>{product.description}</h2>
              <img src={product.images[0].src} />
              <div>{product.variants[0].price}</div>
            </div>
          );
        })}
      </GalleryWrapper>
    </div>
  );
};
export default Index;
