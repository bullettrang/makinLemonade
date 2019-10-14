import styled from 'styled-components';
const Featured = styled.div`
font-family:sans-serif;
text-align:center;
padding:calc(3vmin);
margin-bottom:calc(3vmin);
position:relative;
h2{
  text-transform:uppercase;
  ::after{
    content:"";
    height: 3px;
    width: 140px;
    position: relative;
    background: rgb(118, 178, 81);
    display:block;
    margin:0 auto;
  }
}
`;

export default Featured;