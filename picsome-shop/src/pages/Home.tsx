import { FC, useContext } from "react";
import { ImageContext } from "../ImageContext";
import ImageProduct from "../components/ImageProduct";
import { Image } from "../types";

interface HomeProps {
  cartItems: Image[];
  toggleCartItem: (itemId: string) => void;
}

const Home: FC<HomeProps> = ({ cartItems, toggleCartItem }) => {
  const { images, toggleFavorite } = useContext(ImageContext);

  const containsId = (imageList: Image[], imageId: string): boolean =>
    imageList.some(item => item.id === imageId);

  return (
    <main>
      <ul className="photos">
        {images.map(image => (
          <li key={image.id} className={`photo ${image.displayClass}`}>
            <ImageProduct
              src={image.src}
              isFavorite={image.isFavorite}
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
