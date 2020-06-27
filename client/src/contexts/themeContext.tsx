import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const defaultTheme: any = 'light';
export const themeContext = createContext(defaultTheme);

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(defaultTheme);

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvider;
