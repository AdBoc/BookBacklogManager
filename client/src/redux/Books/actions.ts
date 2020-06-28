import { ADD_BOOK, BookStateObject, REMOVE_BOOK } from "./interfaces";

export function addBook(newBook: BookStateObject) {
  return { type: ADD_BOOK, payload: newBook };
}

export function removeBook(bookID: number) {
  return { type: REMOVE_BOOK, payload: bookID };
}
