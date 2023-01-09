import { useEffect, useState } from "react";

interface Item {
  id: string;
}

type ToggleList<T extends Item> = [
  items: T[],
  toggleItem: (itemId: string) => void,
  clearItems: () => void
];

const useToggleList = <T extends Item>(
  allItems: T[],
  collectionId: string
): ToggleList<T> => {
  const [items, setItems] = useState<T[]>(
    JSON.parse(localStorage.getItem(collectionId) ?? "[]")
  );

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

  useEffect(() => {
    localStorage.setItem(collectionId, JSON.stringify(items));
  }, [items]);

  const clearItems = () => {
    setItems([]);
  };

  return [items, toggleItem, clearItems];
};

export default useToggleList;
