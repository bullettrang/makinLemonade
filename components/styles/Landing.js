import styled from "styled-components";

const LandingStyled = styled.div`
    width:100%;
    height:100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.35)),${props =>
      props.backgroundImage};
    background-size:cover;
    background-repeat:no-repeat;
    position:relative;
    pointer-events:none;
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

export default LandingStyled;