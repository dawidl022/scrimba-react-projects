import { FC, useState } from "react";
import BinIcon from "../components/BinIcon";
import { Image } from "../types";

interface CartProps {
  cartItems: Image[];
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
    <div className="cart-page">
      <h2 className="heading">Check out</h2>

      <ul>
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <button onClick={() => toggleCartItem(item.id)}>
              <span className="sr-only">Remove from cart</span>
              <BinIcon />
            </button>
            <img className="image" src={item.src} />
            <span>{formatPrice(ITEM_PRICE)}</span>
          </li>
        ))}
      </ul>

      <div className="total-cost">Total: {formatPrice(totalPrice)}</div>

      {cartItems.length === 0 ? (
        <p>You have no items in your cart</p>
      ) : (
        <button
          disabled={placingOrder}
          onClick={placeOrder}
          className="order-button"
        >
          {placingOrder ? "Ordering" : "Place order"}
        </button>
      )}
    </div>
  );
};

export default Cart;
