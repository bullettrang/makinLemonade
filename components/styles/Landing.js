import styled from "styled-components";

const LandingStyled = styled.div`
  border-top:1px solid #76B251;
  border-bottom:1px solid #76B251;
  width: 100%;
  height: 80vh;
  background: ${props => props.backgroundImage};
  background-position: 0 20%;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  pointer-events: none;
  margin-bottom:calc(5vmin);
  path {
    fill: transparent;
  }
  .Landing--Text {
    font-size: 12px;
    fill: white;
    font-family: sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.45rem;
    font-weight: 800;
  }
`;

export default LandingStyled;
