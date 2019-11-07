import styled from 'styled-components';

const AboutText= styled.div`
  text-align:center;
  padding:calc(5vmin);
  line-height:2rem;

  @media (min-width: 320px) and (max-width: 960px){
    /*I want p to go from 10px-15px*/
    p{
      font-size: calc(0.75rem + 3 * (100vw - 320px) / (960 - 320));
    }
  }

  @media (min-width:961px) and (max-width:1600px){
    /*I want p to go from 12px-15px*/
    p{
      font-size: calc(0.75rem + 3 * (100vw - 961px) / (1600 - 961));
    }
  }

  @media (min-width: 1601px) and (max-width: 2400px) {
  /**I want p to go from 15px-18px */
  p{
    font-size: calc(0.9375rem + 3 * (100vw - 1601px) / (2400 - 1601));
  }
}
`;

export default AboutText;