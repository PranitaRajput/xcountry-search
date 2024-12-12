const CountryCard = ({ flagURL, name }) => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          height: "150px",
          width: "150px",
        }}
      >
        <img
          src={flagURL}
          alt={`Flag of ${name}`} 
          style={{
            width: "100px",
            height: "100px",
          }}
        />
        <h4>{name}</h4>
      </div>
    );
  };
  
  export default CountryCard;