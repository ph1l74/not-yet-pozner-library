export interface Author {
  name: string;
  id: string;
}

export interface Book {
  name: string;
  year: number;
  author: Author;
}

export interface Interview {
  date: Date;
  guest: string;
  books: Book[];
}
