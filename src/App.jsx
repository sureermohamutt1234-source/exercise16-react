import { useState } from 'react';
import CartContext from './CartContext';
import ProductItem from './components/ProductItem';
import CartSummary from './components/CartSummary';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: 'Laptop', price: 800 },
    { id: 2, name: 'Phone', price: 500 },
    { id: 3, name: 'Headphones', price: 100 }
  ];

  const addToCart = (item) => {
    const existingItem = cartItems.find(
      (product) => product.id === item.id
    );

    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((product) =>
          product.id === item.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        { ...item, quantity: 1 }
      ]);
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== itemId)
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart }}
    >
      <div>
        <h1>Shopping Cart Context</h1>

        <h2>Products</h2>

        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
          />
        ))}

        <CartSummary />
      </div>
    </CartContext.Provider>
  );
}

export default App;