import styled from 'styled-components'

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

const CartIcon = (props)=>{
    return(
      <img src={props.source}/>
    )
  }
  
export const CartButton = withButton(CartIcon);
  
  