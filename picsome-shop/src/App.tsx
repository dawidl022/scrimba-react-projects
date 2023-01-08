import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import "./App.scss";
import useToggleList from "./useToggleList";
import { PicsumImage, Image } from "./types";

const App: FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [cartItems, toggleCartItem, clearCart] = useToggleList(images);
  const [favorites, toggleFavorite] = useToggleList<Image>(images);

  useEffect(() => {
    const images: Promise<PicsumImage[]> = fetch(
      "https://picsum.photos/v2/list"
    ).then(res => res.json());
    images.then(data =>
      setImages(
        data.map(img => ({
          id: img.id,
          src: img.download_url,
          displayClass: randomDisplayClass(),
        }))
      )
    );
  }, []);

  const randomDisplayClass = (): string => {
    const randomNumber = Math.random();
    if (randomNumber < 0.2) {
      return "wide";
    }
    if (randomNumber < 0.4) {
      return "tall";
    }
    if (randomNumber < 0.6) {
      return "big";
    }
    return "";
  };

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
              favorites={favorites}
              toggleFavorite={toggleFavorite}
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
