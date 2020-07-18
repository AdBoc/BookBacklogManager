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
import { NewBookData } from "../../ts/interfaces/interfaces";

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
      .catch((error) => { });
  };

  function request(): Action {
    return { type: REQUEST_BOOKS };
  }
  function success(response: BookStateObject[]): Action {
    return { type: RECEIVE_BOOKS, payload: response };
  }
}

export function addBook(book: NewBookData, token: string) {

  return (dispatch: (func: Action) => void) => {
    Axios.post(
      `${url}/addBook`,
      {
        ...book
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
      .then((response) => {
        console.log('book added');
        dispatch(success());
      })
      .catch((error) => {
        console.log(error);
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

export function removeBook(bookId: string, token: string) {
  return (dispatch: (func: Action) => void) => {
    Axios.post(
      `${url}/delete`,
      {
        _id: bookId,
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

export function downloadBook(bookId: string, token: string) {
  return (dispatch: (func: Action) => void) => {
    Axios.post(
      `${url}/download`,
      {
        _id: bookId,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
        responseType: "blob", //{responseType: 'arraybuffer}
      }
    )
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
    .then((response) => { })
    .catch((error) => { });
}

export function editBook(
  oldBook: BookStateObject,
  newBookForm: NewBookData,
  token: string
) {
  Axios.patch(
    `${url}/edit`,
    {
      oldBookData: {
        ...oldBook,
      },
      newBookData: {
        ...(newBookForm.title ? { title: newBookForm.title } : {}),
        ...(newBookForm.author ? { author: newBookForm.author } : {}),
        ...(newBookForm.year ? { year: newBookForm.year } : {}),
        ...(newBookForm.pages ? { pages: newBookForm.pages } : {}),
        ...(newBookForm.type ? { type: newBookForm.type } : {}),
        ...(newBookForm.status ? { status: newBookForm.status } : {}),
      },
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((response) => { })
    .catch((error) => { });
}

export function removeFile(bookId: string, token: string) {
  Axios.post(
    `${url}/deleteFile`,
    {
      _id: bookId,
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((response) => { })
    .catch((error) => {
      console.log(error);
    });
}

export function sendDeadline(deadline: string, bookId: string, token: string) {
  Axios.post(
    `${url}/setDeadline`,
    {
      _id: bookId,
      deadline
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((response) => { })
    .catch((error) => {
      console.log(error);
    });
};

export function sendCurrentPage(pages: string, bookId: string, token: string) {
  Axios.post(
    `${url}/setCurrentPages`,
    {
      _id: bookId,
      pages
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((response) => { })
    .catch((error) => {
      console.log(error);
    });
};

export function sendStatus(status: string, bookId: string, token: string) {
  Axios.post(
    `${url}/sendStatus`,
    {
      _id: bookId,
      status
    },
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  )
    .then((response) => { })
    .catch((error) => {
      console.log(error);
    });
};