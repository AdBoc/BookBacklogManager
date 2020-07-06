import {
  Action,
  UserInitialState,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "./interfaces";

const initialState: UserInitialState = {
  isLogging: false,
  isLogged: false,
  token: "",
  error: "",
};

export function userReducer(
  state = initialState,
  action: Action
): UserInitialState {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLogging: true,
        isLogged: false,
        token: "",
        error: "",
      };
    case LOGIN_SUCCESS:
      console.log("success");
      return {
        isLogging: false,
        isLogged: true,
        token: action.payload,
        error: "",
      };
    case LOGIN_FAILURE:
      return {
        isLogging: false,
        isLogged: false,
        token: "",
        error: "",
      };
    case REGISTER_REQUEST:
    case REGISTER_SUCCESS:
    case REGISTER_FAILURE:
      return state;
    default:
      return state;
  }
}
