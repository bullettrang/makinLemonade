import styled from "styled-components";

const SizeWrapper = styled.div`
  margin: calc(2vmin);
`;
const Size = ({ size, setSize, variants }) => {
  //default variant is the first one
  const sizeChangeHandler = event => {
    setSize(event.target.value);
  };
  return (
    <SizeWrapper>
      <select onChange={sizeChangeHandler} value={size} className="size">
        {variants.map(value => {
          return (
            <option key={value.id} value={value.id}>
              {value.title}
            </option>
          );
        })}
      </select>
    </SizeWrapper>
  );
};

export default Size;