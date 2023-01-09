import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { Image } from "./types";

const ImageContext = createContext<CartContextType>({
  images: [],
  toggleFavorite: () => {},
});

interface CartContextType {
  images: Image[];
  toggleFavorite: (imageId: string) => void;
}

interface Props {
  children: ReactNode;
}

interface GithubImage {
  url: string;
  id: string;
  isFavorite: boolean;
}

const ImageContextProvider: FC<Props> = ({ children }) => {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    const images: Promise<GithubImage[]> = fetch(
      "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"
    ).then(res => res.json());

    images.then(data =>
      setImages(
        data.map(img => ({
          id: img.id,
          src: img.url,
          displayClass: randomDisplayClass(),
          isFavorite: img.isFavorite,
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

  const toggleFavorite = (imageId: String) => {
    setImages(prevImages =>
      prevImages.map(img =>
        img.id === imageId ? { ...img, isFavorite: !img.isFavorite } : img
      )
    );
  };

  const context = {
    images,
    toggleFavorite,
  };

  return (
    <ImageContext.Provider value={context}>{children}</ImageContext.Provider>
  );
};

export { ImageContextProvider, ImageContext };
