import {
  AUTHORIZE,
  LOGIN_SUCCESS,
  LOGOUT,
  LOGIN_FAILURE,
} from "../constants/constants";
import { InitialState, AuthActionTypes } from "../../../ts/types/types";

export const initialState = {
  isLogged: false,
  token: "",
};

export const authReducer = (state: InitialState, action: AuthActionTypes) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      console.log("success");
      return state;
    default:
      return state;
  }
};

// export const authReducer = (state: any, action: any) => {
//   switch (action.type) {
//     case AUTHORIZE:
//     case LOGIN_SUCCESS:
//       localStorage.setItem("token", JSON.stringify(action.payload));
//       return {
//         isLogged: true,
//         token: action.payload,
//       };
//     case LOGOUT:
//       localStorage.removeItem("token");
//       return {
//         isLogged: false,
//         token: null,
//       };
//     case LOGIN_FAILURE:
//       console.log("Login Failure");
//       return {
//         isLogged: false,
//         token: null,
//       };
//     default:
//       return state;
//   }
// };
