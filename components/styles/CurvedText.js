
const CurvedText = () => {
    return (
      <svg viewBox="0 0 500 500" className="Curved__Wrapper">
        <path
          id="curve"
          d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97"
        />
        <text width="500">
          <textPath className="Landing--Text" xlinkHref="#curve">
            Hardship Community Struggle
          </textPath>
        </text>
      </svg>
    );
  };

  export default CurvedText;