export interface Author {
  name: string;
}

export interface Book {
  name: string;
  author: Author;
}

export interface Interview {
  date: Date;
  guest: string;
  books: Book[];
}
