import React, { createContext, useState } from "react";
import { ContextProps } from "../../../ts/types/types";

const defaultTheme: any = 'light';
export const themeContext = createContext(defaultTheme);

const ThemeContextProvider = ({ children }: ContextProps) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
