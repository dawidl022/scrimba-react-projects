import { FC, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import useToggleList from "./hooks/useToggleList";
import { ImageContext } from "./ImageContext";
import "./App.scss";

const App: FC = () => {
  const { images } = useContext(ImageContext);
  const [cartItems, toggleCartItem, clearCart] = useToggleList(images, "cart");

  return (
    <>
      <Header cartHasItems={cartItems.length > 0} />
      <Routes>
        <Route
          path="/"
          element={
            <Home cartItems={cartItems} toggleCartItem={toggleCartItem} />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              toggleCartItem={toggleCartItem}
              clearCart={clearCart}
            />
          }
        />
      </Routes>
    </>
  );
};

export default App;
