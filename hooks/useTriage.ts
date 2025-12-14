import { useState } from "react";
import { loadItems, saveItems } from "../lib/storage";
import { InboxItem, Label } from "../lib/models";

export const useTriage = () => {
  const [items] = useState<InboxItem[]>(() => {
    return loadItems().filter((i) => !i.triaged);
  });
  const [index, setIndex] = useState(0);

  const currentItem = items[index];

  const decide = (label: Label) => {
    const all = loadItems();

    const updated = all.map((i) =>
      i.id === currentItem.id ? { ...i, triaged: true, label } : i
    );

    saveItems(updated);
    setIndex((prev) => prev + 1);
  };

  return {
    currentItem,
    index: index + 1,
    total: items.length,
    decide,
    isFinished: index >= items.length,
  };
};
