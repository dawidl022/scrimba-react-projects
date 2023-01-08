import { FC } from "react";

interface ImageProductProps {
  src: string;
  isFavorite: boolean;
  toggleFavorite: () => void;
  isInCart: boolean;
  toggleCart: () => void;
}

const ImageProduct: FC<ImageProductProps> = ({
  src,
  isFavorite,
  toggleFavorite,
  isInCart,
  toggleCart,
}) => {
  return (
    <article>
      <img className="image" src={src} />
      <button onClick={toggleFavorite}>
        {isFavorite ? "Remove from" : "Add to"} favorites
      </button>
      <button onClick={toggleCart}>
        {isInCart ? "Remove from" : "Add to"} cart
      </button>
    </article>
  );
};

export default ImageProduct;
