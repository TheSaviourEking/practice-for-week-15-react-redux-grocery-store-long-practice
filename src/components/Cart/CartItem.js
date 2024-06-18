import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { incrementItemCount, decrementItemCount, removeFromCart, emptyCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(item.id));
  }

  const handleIncrementItemCount = () => {
    dispatch(incrementItemCount(item.id));
  }

  const handleDecrementItemCount = () => {
    dispatch(decrementItemCount(item.id));
  }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
        />
        <button
          className="cart-item-button"
          onClick={() => handleIncrementItemCount()}
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => handleDecrementItemCount()}
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => handleRemoveFromCart()}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;
