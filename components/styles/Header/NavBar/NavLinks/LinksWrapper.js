import styled from  'styled-components';

export const LinksWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  padding:calc(5vmin);
  margin-left:calc(40vmin);

  @media(max-width:650px){
    display:none;
  }
`;

