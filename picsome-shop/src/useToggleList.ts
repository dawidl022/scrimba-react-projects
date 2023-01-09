import { useState } from "react";

interface Item {
  id: string;
}

type ToggleList<T extends Item> = [
  items: T[],
  toggleItem: (itemId: string) => void,
  clearItems: () => void
];

const useToggleList = <T extends Item>(allItems: T[]): ToggleList<T> => {
  const [items, setItems] = useState<T[]>([]);

  const toggleItem = (itemId: string) => {
    setItems(prevItems => {
      if (prevItems.some(fav => fav.id === itemId)) {
        return prevItems.filter(fav => fav.id !== itemId);
      } else {
        const newAddition = allItems.find(img => img.id === itemId);
        return newAddition != null ? [...prevItems, newAddition] : prevItems;
      }
    });
  };

  const clearItems = () => {
    setItems([]);
  };

  return [items, toggleItem, clearItems];
};

export default useToggleList;
