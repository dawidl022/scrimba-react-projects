import { FC, useMemo } from "react";
import ImageProduct from "../components/ImageProduct";
import { Image } from "../types";
import useToggleList from "../useToggleList";

interface HomeProps {
  images: Image[];
  cartItems: Image[];
  toggleCartItem: (itemId: string) => void;
  favorites: Image[];
  toggleFavorite: (itemId: string) => void;
}

const Home: FC<HomeProps> = ({
  images,
  cartItems,
  toggleCartItem,
  favorites,
  toggleFavorite,
}) => {
  const containsId = (imageList: Image[], imageId: string): boolean =>
    imageList.filter(item => item.id === imageId).length > 0;

  return (
    <main>
      <ul className="photos">
        {images.map(image => (
          <li key={image.id} className={`photo ${image.displayClass}`}>
            <ImageProduct
              src={image.src}
              isFavorite={containsId(favorites, image.id)}
              toggleFavorite={() => toggleFavorite(image.id)}
              isInCart={containsId(cartItems, image.id)}
              toggleCart={() => toggleCartItem(image.id)}
            />
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Home;
