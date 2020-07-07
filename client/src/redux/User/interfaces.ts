export interface UserInitialState {
  isLogging: boolean;
  isLogged: boolean | null;
  token: string;
  error: string;
}

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILURE = "REGISTER_FAILURE";
export const LOGOUT = "LOGOUT";
export const AUTHORIZE = "AUTHORIZE";

export type Action =
  | { type: typeof LOGIN_REQUEST }
  | { type: typeof LOGIN_SUCCESS; payload: string }
  | { type: typeof LOGIN_FAILURE }
  | { type: typeof REGISTER_REQUEST }
  | { type: typeof REGISTER_SUCCESS }
  | { type: typeof REGISTER_FAILURE }
  | { type: typeof LOGOUT }
  | { type: typeof AUTHORIZE; payload: string; status: boolean };
