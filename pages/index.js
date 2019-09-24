
import styled from "styled-components";
import LandingStyled from '../components/styles/Landing';
import CurvedText from '../components/styles/CurvedText';





const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  justify-items: center;

  img {
    width: 250px;
  }
`;

const SizeSelector = (props)=>{
  //needs onChange Handler
  return(
    <select>
      {props.options[0].values.map((value)=>{
      return  (<option key={value.value} value={value.value}>{value.value}</option>);
      })}
    </select>
  )
}

const Index = props => {
  const { products } = props;
  return (
    <div>
      <LandingStyled backgroundImage={`url(${"/static/icecream.jpg"})`}>
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
              <SizeSelector options={product.options}/>
            </div>
          );
        })}
      </GalleryWrapper>
    </div>
  );
};
export default Index;
