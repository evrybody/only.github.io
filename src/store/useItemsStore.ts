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
    { index: 1, title: "Музыка" },
    { index: 2, title: "Кино" },
    { index: 3, title: "Литература" },
    { index: 4, title: "Искусство" },
    { index: 5, title: "Спорт" },
    { index: 6, title: "Наука" },
  ],
  activeIndex: 1,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
