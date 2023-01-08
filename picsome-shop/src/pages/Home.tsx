import { FC } from "react";
import ImageProduct from "../components/ImageProduct";
import { PicsumImage } from "../types";
import useToggleList from "../useToggleList";

interface HomeProps {
  images: PicsumImage[];
  cartItems: PicsumImage[];
  toggleCartItem: (itemId: string) => void;
}

const Home: FC<HomeProps> = ({ images, cartItems, toggleCartItem }) => {
  const [favorites, toggleFavorite] = useToggleList<PicsumImage>(images);

  const containsId = (imageList: PicsumImage[], imageId: string): boolean =>
    imageList.filter(item => item.id === imageId).length > 0;

  return (
    <main>
      <ul>
        {images.map(image => (
          <li key={image.id}>
            <ImageProduct
              src={image.download_url}
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
