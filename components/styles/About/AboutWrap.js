import styled from 'styled-components';

const AboutWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: calc(5vmin);

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
`;

export default AboutWrap;