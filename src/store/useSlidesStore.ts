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
        date: 1980,
        content: "Sinclair Research выпускает домашний компьютер ZX80",
      },
      {
        slideNumber: 2,
        date: 1982,
        content:
          "Появился домашний компьютер ZX Spectrum выпущенный компанией Sinclair Research",
      },
      {
        slideNumber: 3,
        date: 1984,
        content:
          "Выход альбома «Thriller» Майкла Джексона - самого продаваемого альбома в истории",
      },
      {
        slideNumber: 4,
        date: 1985,
        content:
          "Благотворительный концерт Live Aid с участием Queen, U2, Дэвида Боуи",
      },
      {
        slideNumber: 5,
        date: 1986,
        content: "Выход альбома «Nevermind» группы Nirvana, начало эры гранжа",
      },
    ],
    2: [
      {
        slideNumber: 1,
        date: 1988,
        content: `«Хищник»/Predator, США (реж. Джон Мактирнан)`,
      },
      {
        slideNumber: 2,
        date: 1989,
        content: `«Кто подставил кролика Роджера»/Who Framed Roger Rabbit, США (реж. Роберт Земекис)`,
      },
      {
        slideNumber: 3,
        date: 1989,
        content: `«Назад в будущее 2»/Back To The Future 2, США (реж. Роберт Земекис)`,
      },
      {
        slideNumber: 4,
        date: 1990,
        content: `«Крепкий Орешек 2»/Die Hard 2, США (реж. Ренни Харлин)`,
      },
      {
        slideNumber: 5,
        date: 1991,
        content: `«Семейка Аддамс»/The Addams Family, США (реж. Барри Зонненфельд)`,
      },
    ],
    3: [
      {
        slideNumber: 1,
        date: 1992,
        content: `Нобелевская премия по литературе - Дерек Уолкотт, «За блестящий образец карибского эпоса в 64 разделах».`,
      },
      {
        slideNumber: 2,
        date: 1994,
        content: `«Бессонница» - роман Стивена Кинга.`,
      },
      {
        slideNumber: 3,
        date: 1995,
        content: "Нобелевская премия по литературе - Шеймас Хини",
      },
      {
        slideNumber: 4,
        date: 1997,
        content: `«Гарри Поттер и философский камень» от Джоан Роулинг`,
      },
    ],
    4: [
      {
        slideNumber: 1,
        date: 1999,
        content: `Премьера балета «Золушка» в постановке Жан-Кристафа Майо, сценография Эрнеста Пиньона`,
      },
      {
        slideNumber: 2,
        date: 2000,
        content: `Возобновлено издание журнала «Театр»`,
      },
      {
        slideNumber: 3,
        date: 2001,
        content: `Премьера трилогии Тома Стоппарда «Берег Утопии», Королевский Национальный театр, Лондон`,
      },
      {
        slideNumber: 4,
        date: 2002,
        content: "Открытие музея современного искусства «Гараж» в Москве",
      },
      {
        slideNumber: 5,
        date: 2003,
        content: "Выставка работ Фриды Кало в Тейт Модерн, Лондон",
      },
      {
        slideNumber: 6,
        date: 2004,
        content:
          "Рекордная продажа картины Фрэнсиса Бэкона «Triptych, 1976» за $86,3 млн",
      },
    ],
    5: [
      {
        slideNumber: 1,
        date: 2007,
        content:
          "Чемпионат мира по футболу в Мексике - победа Аргентины во главе с Марадоной",
      },
      {
        slideNumber: 2,
        date: 2008,
        content:
          "Образование Dream Team - сборной США по баскетболу на Олимпиаде в Барселоне",
      },
      {
        slideNumber: 3,
        date: 2009,
        content:
          "Олимпийские игры в Пекине - рекордное количество медалей сборной Китая",
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
    ],
    6: [
      {
        slideNumber: 1,
        date: 2015,
        content:
          "13 сентября — частное солнечное затмение, видимое в Южной Африке и части Антарктиды",
      },
      {
        slideNumber: 2,
        date: 2016,
        content:
          "Телескоп «Хаббл» обнаружил самую удалённую из всех обнаруженных галактик, получившую обозначение GN-z11",
      },
      {
        slideNumber: 3,
        date: 2017,
        content:
          "Компания Tesla официально представила первый в мире электрический грузовик Tesla",
      },
      {
        slideNumber: 4,
        date: 2018,
        content:
          "Старт космического аппарата Solar Probe Plus, предназначенного для изучения солнца",
      },
      {
        slideNumber: 5,
        date: 2019,
        content:
          "Google объявила о создании 53-кубитного квантового компьютера",
      },
      {
        slideNumber: 6,
        date: 2020,
        content:
          "Корабль Crew Dragon вернулся на Землю из первого пилотируемого полёта ",
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
