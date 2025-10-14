import { create } from "zustand";

interface Item {
  index: number;
  title: string;
}

interface ItemsStore {
  items: Item[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useItemsStore = create<ItemsStore>((set) => ({
  items: [
    { index: 1, title: "Наука" },
    { index: 2, title: "Образование" },
    { index: 3, title: "Технологии" },
    { index: 4, title: "Искусство" },
    { index: 5, title: "Спорт" },
    { index: 6, title: "Музыка" },
  ],
  activeIndex: 1,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
