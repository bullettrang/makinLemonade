import styled from "styled-components";

const LineItem = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: calc(3vmin);
  border-bottom: 1px solid rgb(118, 178, 81);

  .lineItem--qty {
    grid-column-start: 1;
    grid-column-end: 2;
  }

  .line--delete {
    width: 25px;
    height: 25px;
    border-radius: 3px;
    box-shadow: 0px 1px 2px 0px;
    position: relative;
    left: -65%;
  }

  .lineItem--qty--controls {
    grid-column-start: 1;
    grid-column-end: 2;

    input {
      max-width: 20px;
    }
  }
`;

export default LineItem;
