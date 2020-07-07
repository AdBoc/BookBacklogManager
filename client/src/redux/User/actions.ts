import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  Action,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from "./interfaces";
import Axios from "axios";
import { history } from "../../_helpers/history";
const url = "http://localhost:8000/api/user";

export function login(email: string, password: string) {
  return (dispatch: (func: Action) => void) => {
    dispatch(request());
    Axios.post(
      `${url}/login`,
      {},
      {
        auth: {
          username: email,
          password,
        },
      }
    )
      .then((response) => {
        const token: string = response.data.token;
        dispatch(success(token));
        history.push("/");
      })
      .catch((error) => {
        dispatch(failure());
      });
  };

  function request(): Action {
    return { type: LOGIN_REQUEST };
  }
  function success(token: string): Action {
    return { type: LOGIN_SUCCESS, payload: token };
  }
  function failure(): Action {
    return { type: LOGIN_FAILURE };
  }
}

export function register(email: string, password: string) {
  return (dispatch: (func: Action) => void) => {
    dispatch(request());
    Axios.post(`${url}/create`, {
      email,
      password,
    })
      .then((response) => {
        dispatch(success());
        history.push("/login");
      })
      .catch((error) => {
        dispatch(failure());
      });
  };

  function request(): Action {
    return { type: REGISTER_REQUEST };
  }
  function success(): Action {
    return { type: REGISTER_SUCCESS };
  }
  function failure(): Action {
    return { type: REGISTER_FAILURE };
  }
}

export function logout() {}
