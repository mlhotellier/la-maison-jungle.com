import Sun from "../assets/sun.svg";
import Water from "../assets/water.svg";

function handleClick(scaleValue, careType) {
  let require;
  if (scaleValue === 1) {
    require = "peu"
  }
  if (scaleValue === 2) {
    require = "modérément"
  } 
  if (scaleValue === 3) {
    require = "beaucoup"
  }
  
  alert(`Cette plante requiert ${require} d${careType === "light" ? "e lumière" : "'arrosage"}.`)
}

function CareScale({ scaleValue, careType }) {
  const range = [1, 2, 3];
  const scaleType =
    careType === "light" ? (
      <img src={Sun} alt="sun-icon" />
    ) : (
      <img src={Water} alt="water-icon" />
    );

  return (
    <div onClick={() => handleClick(scaleValue, careType)}>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span key={rangeElem.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;