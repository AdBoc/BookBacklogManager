export interface BookStateObject {
  _id: string;
  title: string;
  author: string;
  year: string;
  pages: string;
  type: 'Nonfiction' | 'Fiction' | 'Science' | '';
  status: 'OnBacklog' | 'CurrentlyReading' | 'Suspended' | 'History' | '';
  dateCreated: string;
  filePath?: string;
  currentReadsStatus: {
    status: boolean;
    date?: string;
    pages?: string;
  }
}

export interface InitialBookState {
  isFetching: boolean;
  items: BookStateObject[];
}

export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAIL = "ADD_FAIL";
export const REQUEST_BOOKS = "REQUEST_BOOKS";
export const RECEIVE_BOOKS = "RECEIVE_BOOKS";
export const REMOVE_SUCCESS = "REMOVE_SUCCESS";
export const REMOVE_FAILURE = "REMOVE_FAILURE";
export const DOWNLOAD_BOOK = "DOWNLOAD_BOOK";

export interface AddBook {
  type: typeof ADD_SUCCESS;
  // payload: BookStateObject;
}

export interface AddFail {
  type: typeof ADD_FAIL;
}

export interface RequestBooks {
  type: typeof REQUEST_BOOKS;
}

export interface ReceiveBooks {
  type: typeof RECEIVE_BOOKS;
  payload: BookStateObject[];
}

export interface RemoveSuccess {
  type: typeof REMOVE_SUCCESS;
  //payload: number;
}

export interface RemoveFailure {
  type: typeof REMOVE_FAILURE;
}

export interface Download {
  type: typeof DOWNLOAD_BOOK;
}

export type Action =
  | AddBook
  | AddFail
  | ReceiveBooks
  | RequestBooks
  | RemoveSuccess
  | RemoveFailure
  | Download;
