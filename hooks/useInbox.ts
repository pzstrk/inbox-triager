import { loadItems, saveItems } from "../lib/storage";
import { InboxItem } from "../lib/models";

export const useInbox = () => {
  const saveBulk = (text: string) => {
    const lines = text
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

    const items: InboxItem[] = lines.map((line) => ({
      id: Date.now().toString(),
      rawText: line,
      triaged: false,
    }));

    const existing = loadItems();
    saveItems([...existing, ...items]);
  };

  return { saveBulk };
};
