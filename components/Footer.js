import styled from "styled-components";
import Link from "next/link";

//footer
// contact
//social media icons (facebook, instagram)

const FooterStyled = styled.div`
  width: 100%;
  padding: calc(5vmin);
  margin-top: calc(5vmin);
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
`;

const SocialMedia = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
`;

const FootLink = styled.a`
  color: #76b251;
  font-weight: 800;
  text-transform: uppercase;
`;

const Footer = () => {
  return (
    <FooterStyled>
      <Link href="/">
        <a>Contact</a>
      </Link>
      <SocialMedia>
        <h2 id="social-media">Social Media</h2>
        <FootLink
          href="https://www.instagram.com/makinlemonadeapparel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram"></i>
        </FootLink>
        <FootLink
          href="https://www.facebook.com/makinlemonadeapparel/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook-f"></i>
        </FootLink>
      </SocialMedia>
    </FooterStyled>
  );
};
export default Footer;
