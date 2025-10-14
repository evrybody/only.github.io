import { create } from "zustand";

interface IItem {
  index: number;
  interval: [number, number];
}

interface IItemsStore {
  items: IItem[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

export const useDatesStore = create<IItemsStore>((set) => ({
  items: [
    { index: 1, interval: [1983, 1985] }, 
    { index: 2, interval: [1987, 1991] },
    { index: 3, interval: [1992, 1997] },
    { index: 4, interval: [1999, 2004] },
    { index: 5, interval: [2007, 2014] }, 
    { index: 6, interval: [2015, 2022] },
  ],
  activeIndex: 1,
  setActiveIndex: (index) => set({ activeIndex: index }),
}));
