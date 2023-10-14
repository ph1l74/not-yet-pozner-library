import { Author, Book, Interview } from "@/models";

export type INTERVIEW_STATE_TYPE = {
  isLoading: boolean;
  interviews: Interview[];
  error: string | null;
};

export type AUTHOR_STATE_TYPE = {
  isLoading: boolean;
  authors: Author[];
  error: string | null;
};

export type BOOKS_STATE_TYPE = {
  isLoading: boolean;
  books: Book[];
  error: string | null;
};

export const INTERVIEW_STATE_INIT: INTERVIEW_STATE_TYPE = {
  isLoading: false,
  interviews: [],
  error: null,
};
export const AUTHOR_STATE_INIT: AUTHOR_STATE_TYPE = {
  isLoading: false,
  authors: [],
  error: null,
};
export const BOOKS_STATE_INIT: BOOKS_STATE_TYPE = {
  isLoading: false,
  books: [],
  error: null,
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
