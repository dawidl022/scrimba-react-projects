import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./App.css";
import useToggleList from "./useToggleList";
import { PicsumImage } from "./types";

const App: FC = () => {
  const [images, setImages] = useState<PicsumImage[]>([]);
  const [cartItems, toggleCartItem, clearCart] = useToggleList(images);

  useEffect(() => {
    const images: Promise<PicsumImage[]> = fetch(
      "https://picsum.photos/v2/list"
    ).then(res => res.json());
    images.then(data => setImages(data));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              images={images}
              cartItems={cartItems}
              toggleCartItem={toggleCartItem}
            />
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
