import { BookStateObject, REQUEST_BOOKS, RECEIVE_BOOKS } from "./interfaces";
import { Action } from "./interfaces";
import Axios from "axios";

const url = "http://localhost:8000/api/books";

export function requestBooks(token: string) {
  return (dispatch: (func: Action) => void) => {
    dispatch(request());
    Axios.get(`${url}/show`, {
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => {
        dispatch(success(response.data));
      })
      .catch((error) => {});
  };

  function request(): Action {
    return { type: REQUEST_BOOKS };
  }
  function success(response: BookStateObject[]): Action {
    return { type: RECEIVE_BOOKS, payload: response };
  }
}

export function addBook(book: BookStateObject, token: string) {
  return (dispatch: (func: Action) => void) => {
    Axios.post(
      `${url}/addBook`,
      {
        title: book.title,
        author: book.author,
        year: book.year,
        pages: book.pages,
        type: book.type,
        status: book.status,
        dateCreated: book.dateCreated,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => {})
      .catch((error) => {
        console.log(error);
      });
  };
  //ADD BOOK
  //ADD FAIL
}

// export function addBook(newBook: BookStateObject) {
//   return { type: ADD_BOOK, payload: newBook };
// }

// export function removeBook(bookID: number) {
//   return { type: REMOVE_BOOK, payload: bookID };
// }
