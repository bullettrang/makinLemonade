import styled from 'styled-components';
const Featured = styled.div`
font-family:sans-serif;
text-align:center;
padding:calc(3vmin);
margin-bottom:calc(3vmin);
position:relative;
h2{
  text-transform:uppercase;

}
::after{
    content:"";
    height: 3px;
    width: 50%;
    position: relative;
    background: rgb(118, 178, 81);
    display:block;
    margin:0 auto;
    margin-top:calc(3vmin);
  }

@media (min-width: 961px) and (max-width: 1600px) {
  h2{
    font-size: calc( 1.5625rem + 15 * (100vw - 961px) / (1600 - 961));
    letter-spacing: .2em; 
    }
}
`;

export default Featured;