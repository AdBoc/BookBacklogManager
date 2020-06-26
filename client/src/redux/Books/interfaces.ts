export interface BookStateObject {
  id: string;
  title: string;
  author: string;
  year: string;
  pages: string;
  type: string;
  status: string;
  dateCreated: string;
}

export const SHOW = "SHOW";

export interface ShowBooks {
  type: typeof SHOW;
}

export type BookActionTypes = ShowBooks;

export type BookActions = BookActionTypes;
