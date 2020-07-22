import {
  Action,
  UserInitialState,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_FAILURE,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  LOGOUT,
  AUTHORIZE,
} from "./interfaces";

const initialState: UserInitialState = {
  isLogging: false,
  isLogged: null,
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
      document.cookie = 'token' + '=' + action.payload + "; max-age=2592000" + "; path=/";
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
        error: "", //return error
      };
    case LOGOUT:
      document.cookie = 'token' + '= ; max-age=-1';
      return {
        ...state,
        isLogged: false,
        token: "",
        error: "",
      };
    case REGISTER_REQUEST:
    case REGISTER_SUCCESS:
    case REGISTER_FAILURE:
      return state;
    case AUTHORIZE:
      return {
        isLogging: false,
        isLogged: action.status,
        token: action.payload,
        error: "",
      }; //if auth
    default:
      return state;
  }
}
