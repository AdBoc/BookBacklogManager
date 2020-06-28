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

export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";

export interface AddBook {
  type: typeof ADD_BOOK;
  payload: BookStateObject;
}

export interface RemoveBook {
  type: typeof REMOVE_BOOK;
  payload: number;
}

export type BookActionTypes = AddBook | RemoveBook;

export type BookActions = BookActionTypes;
