import { useState } from 'react';
import '../styles/Cart.css';

function Cart({cart, updateCart}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce((acc, item) => {
		return acc + item.amount * item.price;
	}, 0);

	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer le panier
			</button>
			<h2>Panier</h2>
			{cart.map(({name, price, amount},index) => (
				<div key={`${name}-${index}`}>
					{name} {price}€ (x{amount})
				</div>
			))}
			<h3>Total : {total.length === 0 ? "0" : `${total}`}€</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart