import styled from "styled-components";

const GalleryWrapper = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
justify-items: center;

img {
  width: 250px;
}
`;

export default GalleryWrapper;