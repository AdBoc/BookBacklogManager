import {
  BookStateObject,
  REQUEST_BOOKS,
  RECEIVE_BOOKS,
  ADD_SUCCESS,
  ADD_FAIL,
  DOWNLOAD_BOOK,
} from "./interfaces";
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
      .then((response) => {
        dispatch(success());
      })
      .catch((error) => {
        dispatch(failure());
      });
  };

  function success(): Action {
    return { type: ADD_SUCCESS };
  }

  function failure(): Action {
    return { type: ADD_FAIL };
  }
}

export function removeBook(bookID: string, token: string) {
  return (dispatch: (func: Action) => void) => {
    Axios.post(
      `${url}/delete`,
      {
        _id: bookID,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => {
        dispatch(success());
      })
      .catch((error) => {
        dispatch(failure());
      });
  };

  function success(): Action {
    return { type: ADD_SUCCESS };
  }

  function failure(): Action {
    return { type: ADD_FAIL };
  }
}

export function downloadBook(token: string) {
  return (dispatch: (func: Action) => void) => {
    Axios.get(`${url}/download`, {
      headers: {
        Authorization: "Bearer " + token,
      },
      responseType: "blob", //{responseType: 'arraybuffer}
    })
      .then((response) => {
        const blob = new Blob([response.data], { type: "application/pdf" });
        const url = window.URL.createObjectURL(blob);
        window.open(url, "_blank");
        dispatch(success());
      })
      .catch((error) => {
        console.log(error);
      });
  };
  function success(): Action {
    return { type: DOWNLOAD_BOOK };
  }
}

export function uploadBook(token: string, file: any) {
  Axios.post(`${url}/upload`, file, {
    headers: {
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {})
    .catch((error) => {});
}

// res.sendFile(file, {headers: {'Content-Type': 'image/jpeg'}})

// const link = document.createElement("a");
// link.href = window.URL.createObjectURL(blob);
// link.download = "Report_" + new Date() + ".pdf";
// link.click();

// var file = fs.createReadStream('./public/modules/datacollectors/output.pdf');
// var stat = fs.statSync('./public/modules/datacollectors/output.pdf');
// res.setHeader('Content-Length', stat.size);
// res.setHeader('Content-Type', 'application/pdf');
// res.setHeader('Content-Disposition', 'attachment; filename=quote.pdf');
// file.pipe(res);
