import Featured from "../components/styles/Featured";
import AboutWrap from '../components/styles/About/AboutWrap';
import AboutImage from "../components/styles/About/AboutImage";
import AboutText from "../components/styles/About/AboutText";

export default function About() {
  return (
    <div>
      <Featured>
        <h2 id="about-heading">About Us</h2>
      </Featured>
      <AboutWrap>
        <div>
          <AboutImage src="/static/iron_brigade_slideshow.jpg" />
        </div>
        <AboutText>
          <h3>When Life gives you Lemons, make Lemonade</h3>
          <p>Turn something sour, into something sweet</p>
          <p>
            Makin' Lemonade references the quote "When life gives you lemons,
            make lemonade." Lemons resemble the sourness of life and when one
            makes lemonade, it symbolizes when they are able to push through
            hardship and struggle to make something sweet. Makin' Lemonade
            represents a community of people who have been through struggle and
            persevered. Fitness is highly emphasized in this brand as fitness is
            solely about self improvement. And through hardship and struggle,
            comes self improvement
          </p>
        </AboutText>
      </AboutWrap>
    </div>
  );
}
