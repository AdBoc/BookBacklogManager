export interface BookStateObject {
  _id: string;
  title: string;
  author: string;
  year: string;
  pages: string;
  type: string;
  status: string;
  dateCreated: string;
}

export interface InitialBookState {
  isFetching: boolean;
  items: BookStateObject[];
}

export const ADD_BOOK = "ADD_BOOK";
export const REMOVE_BOOK = "REMOVE_BOOK";
export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";

export interface AddBook {
  type: typeof ADD_BOOK;
  payload: BookStateObject;
}

export interface RemoveBook {
  type: typeof REMOVE_BOOK;
  payload: number;
}

export interface RequestBooks {
  type: typeof REQUEST_BOOKS;
}

export interface ReceiveBooks {
  type: typeof RECEIVE_BOOKS;
  payload: BookStateObject[];
}

export type Action = AddBook | RemoveBook | ReceiveBooks | RequestBooks;
