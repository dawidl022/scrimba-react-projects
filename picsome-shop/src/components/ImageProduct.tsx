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
    <>
      <img className="image-grid" src={src} />

      <button
        onClick={toggleFavorite}
        className={`product-btn ${isFavorite ? "enabled" : ""} favorite`}
      >
        <span className="sr-only">
          {isFavorite ? "Remove from" : "Add to"} favorites
        </span>
        <i
          className={`ri-heart-${isFavorite ? "fill" : "line"}`}
          aria-hidden="true"
        ></i>
      </button>

      <button
        onClick={toggleCart}
        className={`product-btn ${isInCart ? "enabled" : ""} cart`}
      >
        <span className="sr-only">
          {isInCart ? "Remove from" : "Add to"} cart
        </span>
        <i
          className={isInCart ? "ri-shopping-cart-fill" : "ri-add-circle-line"}
          aria-hidden="true"
        ></i>
      </button>
    </>
  );
};

export default ImageProduct;
