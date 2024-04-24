import { plantList } from "../datas/plantList";
import "../styles/ShoppingList.css";
import PlantItem from "./PlantItem";
import Categories from "./Categories";
import { useState } from "react";

function ShoppingList({ cart, updateCart }) {
  const [categorySelected, setCategorySelected] = useState("");
  const listCategories = new Set();
  plantList.forEach((plant) => {
    listCategories.add(plant.category);
  });

  function addToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded) {
      const plantIsAlreadyInCard = cart.filter((plant) => plant.name !== name);
      updateCart([
        ...plantIsAlreadyInCard,
        { name, price, amount: currentPlantAdded.amount + 1 },
      ]);
    } else {
      updateCart([...cart, { name, price, amount: 1 }]);
    }
  }

  function filteredPlantByCategory(categorySelected) {
    if (!categorySelected) {
      return plantList;
    }
    const filteredPlantList = plantList.filter(
      (plant) => plant.category === categorySelected
    );
    return filteredPlantList;
  }

  return (
    <div className="lmj-shopping-list">
      <Categories
        listCategories={listCategories}
        categorySelected={categorySelected}
        setCategorySelected={setCategorySelected}
      />
      <ul className="lmj-plant-list">
        {(categorySelected === '' ? 
          plantList : filteredPlantByCategory(categorySelected))
            .map(({ id, cover, name, water, light, isSpecialOffer, price }) => (
              <div key={id}>
                <PlantItem
                  cover={cover}
                  name={name}
                  water={water}
                  light={light}
                  isSpecialOffer={isSpecialOffer}
                  price={price}
                />
                <button onClick={() => addToCart(name, price)}>Ajouter</button>
              </div>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
