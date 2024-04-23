import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";

import PlantItem from "./PlantItem";

function ShoppingList() {
  const listCategories = new Set();
  plantList.forEach((plant) => {
    listCategories.add(plant.category);
  });

  return (
    <div>
      <ul>
        {[...listCategories].map((category) => (
          <li key={category}>{category}</li>
        ))}
      </ul>
      <ul className="lmj-plant-list">
        {plantList.map(({id, cover, name, water, light, isSpecialOffer}) => (
          <PlantItem
            key={`${name}-${id}`}
            id={id}
            cover={cover}
            name={name}
            water={water}
            light={light}
            isSpecialOffer={isSpecialOffer}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
