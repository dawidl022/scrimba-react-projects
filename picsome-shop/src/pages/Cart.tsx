import { FC, useEffect, useState } from "react";
import { PicsumImage } from "../types";

interface CartProps {
  cartItems: PicsumImage[];
  toggleCartItem: (itemId: string) => void;
  clearCart: () => void;
}

const ITEM_PRICE = 599;

const Cart: FC<CartProps> = ({ cartItems, toggleCartItem, clearCart }) => {
  const totalPrice = cartItems.length * ITEM_PRICE;
  const [placingOrder, setPlacingOrder] = useState(false);

  const formatPrice = (priceInCents: number): string => {
    return `$${(priceInCents / 100).toFixed(2)}`;
  };

  const placeOrder = () => {
    setPlacingOrder(true);
    setTimeout(() => {
      clearCart();
      setPlacingOrder(false);
      console.log("Order placed!");
    }, 3000);
  };

  return (
    <div>
      <h2>Check out</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            <button onClick={() => toggleCartItem(item.id)}>
              Remove from cart
            </button>
            <img className="image" src={item.download_url} />
            <span>{formatPrice(ITEM_PRICE)}</span>
          </li>
        ))}
      </ul>
      <div>Total: {formatPrice(totalPrice)}</div>
      {cartItems.length === 0 ? (
        <p>You have no items in your cart</p>
      ) : (
        <button disabled={placingOrder} onClick={placeOrder}>
          {placingOrder ? "Ordering" : "Place order"}
        </button>
      )}
    </div>
  );
};

export default Cart;
