import styled from "styled-components";

const LandingStyled = styled.div`
  width: 100%;
  height: 80vh;
  /* background: ${props => props.backgroundImage}; */
  background-color:rgb(252, 227, 115);
  /* background-position: 0 36%;
  background-size: cover;
  background-repeat: no-repeat; */
  padding:calc(10vmin);
  position: relative;
  /* pointer-events: none; */
  margin-bottom:calc(5vmin);
  path {
    fill: transparent;
  }
  /* display:grid; */
  /* grid-template-columns: 1fr 2fr; */
  @media (max-width:650px)  {
    display:none;
  }
`;

export default LandingStyled;
