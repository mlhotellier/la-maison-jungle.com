import CareScale from "./CareScale";
import "../styles/PlantItem.css";

function handleClick(plantName) {
	alert(`Vous voulez acheter 1 ${plantName}? Très bon choix 🌱✨`)
}

function PlantItem({id, cover, name, water, light, isSpecialOffer}) {
  return (
    <li key={id} className="lmj-plant-item" onClick={() => handleClick(name)}>
      {isSpecialOffer && <div className="lmj-sales">Soldes</div>}
      <img className="lmj-plant-item-cover" src={cover} alt={`${name} cover`} />
      {name}
      <div>
        <CareScale careType="water" scaleValue={water} />
        <CareScale careType="light" scaleValue={light} />
      </div>
    </li>
  );
}

export default PlantItem;