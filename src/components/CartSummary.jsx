import { useContext } from 'react';
import CartContext from '../CartContext';

function CartSummary() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h2>Cart Summary</h2>

      <p>Total Items: {totalItems}</p>
      <p>Total Price: ${totalPrice}</p>

      {cartItems.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default CartSummary;