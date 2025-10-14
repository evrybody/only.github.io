import { create } from "zustand";

export interface ISlideData {
  slideNumber: number;
  date: number;
  content: string;
}

interface ISlideGroup {
  [index: number]: ISlideData[];
}

interface ISlideStore {
  slides: ISlideGroup;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  getSlidesByIndex: (index: number) => ISlideData[];
}

export const useSlidesStore = create<ISlideStore>((set, get) => ({
  slides: {
    1: [
      {
        slideNumber: 1,
        date: 1983,
        content: "Запуск первой мобильной сети",
      },
      {
        slideNumber: 2,
        date: 1983,
        content: "Появление персональных компьютеров",
      },
      {
        slideNumber: 3,
        date: 1984,
        content: "Создание графического интерфейса",
      },
      {
        slideNumber: 4,
        date: 1985,
        content: "Развитие цифровой связи",
      },
      {
        slideNumber: 5,
        date: 1985,
        content: "Рождение интернет-протоколов",
      },
    ],
    2: [
      {
        slideNumber: 1,
        date: 1988,
        content: "Создание единого европейского рынка",
      },
      {
        slideNumber: 2,
        date: 1989,
        content: "Падение Берлинской стены",
      },
      {
        slideNumber: 3,
        date: 1989,
        content: "Революция в странах Восточной Европы",
      },
      {
        slideNumber: 4,
        date: 1990,
        content: "Объединение Германии",
      },
      {
        slideNumber: 5,
        date: 1991,
        content: "Распад Советского Союза",
      },
    ],
    3: [
      {
        slideNumber: 1,
        date: 1992,
        content: "Подписание Маастрихтского договора",
      },
      {
        slideNumber: 2,
        date: 1993,
        content: "Создание Европейского союза",
      },
      {
        slideNumber: 3,
        date: 1994,
        content: "Старт всемирной паутины",
      },
      {
        slideNumber: 4,
        date: 1995,
        content: "Расширение интернета",
      },
      {
        slideNumber: 5,
        date: 1997,
        content: "Развитие цифровых технологий",
      },
    ],
    4: [
      {
        slideNumber: 1,
        date: 1999,
        content: "Введение единой европейской валюты",
      },
      {
        slideNumber: 2,
        date: 2000,
        content: "Пик развития IT-индустрии",
      },
      {
        slideNumber: 3,
        date: 2001,
        content: " Теракты в США",
      },
      {
        slideNumber: 4,
        date: 2002,
        content: "Рост глобальной безопасности",
      },
      {
        slideNumber: 5,
        date: 2003,
        content: "Война в Ираке",
      },
      {
        slideNumber: 6,
        date: 2004,
        content: "Расширение Евросоюза",
      },
    ],
    5: [
      {
        slideNumber: 1,
        date: 2007,
        content: "Мировой финансовый кризис",
      },
      {
        slideNumber: 2,
        date: 2008,
        content: "Падение рынка недвижимости",
      },
      {
        slideNumber: 3,
        date: 2009,
        content: "Рост безработицы",
      },
      {
        slideNumber: 4,
        date: 2010,
        content: "Восстановление экономики",
      },
      {
        slideNumber: 5,
        date: 2011,
        content: "Революция в социальных сетях",
      },
      {
        slideNumber: 6,
        date: 2012,
        content: "Развитие мобильных технологий",
      },
      {
        slideNumber: 7,
        date: 2013,
        content: "Массовый переход в цифру",
      },
      {
        slideNumber: 8,
        date: 2014,
        content: "Аннексия Крыма",
      },
    ],
    6: [
      {
        slideNumber: 1,
        date: 2015,
        content: "Миграционный кризис в Европе",
      },
      {
        slideNumber: 2,
        date: 2016,
        content: "Популярность искусственного интеллекта",
      },
      {
        slideNumber: 3,
        date: 2017,
        content: "Бум криптовалют",
      },
      {
        slideNumber: 4,
        date: 2018,
        content: "Введение санкций",
      },
      {
        slideNumber: 5,
        date: 2019,
        content: "Пандемия COVID-19",
      },
      {
        slideNumber: 6,
        date: 2020,
        content: "Глобальный локдаун",
      },
      {
        slideNumber: 7,
        date: 2021,
        content: "Разработка вакцин",
      },
    ],
  },
  activeIndex: 1,
  setActiveIndex: (index) => set({ activeIndex: index }),
  getSlidesByIndex: (index) => {
    const { slides } = get();
    return slides[index];
  },
}));
