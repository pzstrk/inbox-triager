import { InboxItem } from "./models";

const KEY = "inbox-items";

export const loadItems = (): InboxItem[] => {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(KEY) ?? "[]");
};

export const saveItems = (items: InboxItem[]) => {
  localStorage.setItem(KEY, JSON.stringify(items));
};
