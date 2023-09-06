export type DATA_STORE_TYPE = {
  isLoading: boolean;
};

export const DATA_INIT_STATE: DATA_STORE_TYPE = {
  isLoading: false,
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
  }
];
