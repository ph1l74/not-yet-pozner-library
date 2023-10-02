export type DATA_STORE_TYPE = {
  isLoading: boolean;
  data: unknown | null;
};

export const DATA_INIT_STATE: DATA_STORE_TYPE = {
  isLoading: false,
  data: null
};

type Category = {
  key: string;
  title: string;
};

export const CATEGORIES: Category[] = [
  {
    key: "guests",
    title: "Гости",
  },
  {
    key: "authors",
    title: "Авторы",
  },
  {
    key: "interviews",
    title: "Интервью",
  },
];

type Collections = {
  [key: string]: string;
};

export const BD_COLLECTIONS: Collections = {
  authors: "authors",
  books: "books",
  interviews: "interviews",
};
