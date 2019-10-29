import Featured from "../components/styles/Featured";
import styled from 'styled-components';

const AboutWrap = styled.div`
  display:grid;
  grid-template-columns:1fr 1fr;
  padding:calc(5vmin);

  @media (max-width:650px) {
    grid-template-columns:1fr;
    
  }
`;

const AboutImage = styled.img`
  max-width:100%;
  height:auto;
  padding:calc(5vmin);
`;

const AboutText= styled.div`
  text-align:center;
  padding:calc(5vmin);
  line-height:2rem;
`
export default function About() {
  return (
    <div>
      <Featured>
        <h2>About Us</h2>
      </Featured>
      <AboutWrap>
      <div><AboutImage src="/static/iron_brigade_slideshow.jpg"/></div>
      <AboutText style={{textAlign:"center"}}>
        <h3>When Life gives you Lemons, make Lemonade</h3>
        <p>Turn something sour, into something sweet</p>
        <p>
          Makin' Lemonade references the quote "When life gives you lemons, make
          lemonade." Lemons resemble the sourness of life and when one makes
          lemonade, it symbolizes when they are able to push through hardship
          and struggle to make something sweet. Makin' Lemonade represents a
          community of people who have been through struggle and persevered.
          Fitness is highly emphasized in this brand as fitness is solely about
          self improvement. And through hardship and struggle, comes self
          improvement
        </p>
      </AboutText>
      </AboutWrap>
    </div>
  );
}
