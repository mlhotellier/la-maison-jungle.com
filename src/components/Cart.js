import { useState } from "react";
import "../styles/Cart.css";

function Cart({ cart, updateCart }) {
  const [isOpen, setIsOpen] = useState(true);
  const total = cart.reduce((acc, item) => acc + item.amount * item.price, 0);
  
  // useEffect(() => {
  //   document.title = `LMJ: ${total}€ d'achats`;
  // }, [total]);

  function decreaseQuantityToCart(name, price) {
    const currentPlantRemoved = cart.find((plant) => plant.name === name);
    if (currentPlantRemoved && currentPlantRemoved.amount > 1) {
      updateCart(
        cart.map((plant) =>
          plant.name === name && plant.price === price
            ? { ...plant, amount: plant.amount - 1 }
            : plant
        )
      );
    } else {
      updateCart(cart.filter((plant) => !(plant.name === name && plant.price === price)));
    }
  }

  function increaseQuantityToCart(name, price) {
    const currentPlantAdded = cart.find((plant) => plant.name === name);
    if (currentPlantAdded  && currentPlantAdded.amount > 0) {
      updateCart(
        cart.map((plant) =>
          plant.name === name && plant.price === price
            ? { ...plant, amount: plant.amount + 1 }
            : plant
        )
      );
    }
  }

  return isOpen ? (
    <div className="lmj-cart">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(false)}
      >
        Fermer
      </button>
      {cart.length > 0 ? (
        <div>
          <h2>Panier</h2>
          <ul>
            {cart.map(({ name, price, amount }, index) => (
              <div key={`${name}-${index}`}>
                {name} {price}€ (x{amount})
                <button onClick={() => increaseQuantityToCart(name,price)}>+</button>
                <button onClick={() => decreaseQuantityToCart(name,price)}>-</button>
              </div>
            ))}
          </ul>
          <h3>Total : {total}€</h3>
          <button onClick={() => updateCart([])}>Vider le panier</button>
        </div>
      ) : (
        <div>Votre panier est vide</div>
      )}
    </div>
  ) : (
    <div className="lmj-cart-closed">
      <button
        className="lmj-cart-toggle-button"
        onClick={() => setIsOpen(true)}
      >
        Ouvrir le Panier
      </button>
    </div>
  );
}

export default Cart;
