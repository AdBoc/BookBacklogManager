import React, { createContext, useReducer } from "react";
import { ContextProps } from "../../../ts/types/types";
import { authReducer, initialState } from "../reducers/authReducer";
import { InitialState } from "../../../ts/types/types";

export const authContext = createContext<any>(initialState); // to type!!

const ThemeContextProvider = ({ children }: ContextProps): JSX.Element => {
  const [authStatus, dispatch] = useReducer(authReducer, initialState);

  return (
    <authContext.Provider value={{ authStatus, dispatch }}>
      {children}
    </authContext.Provider>
  );
};

export default ThemeContextProvider;
