import React, { createContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

const defaultTheme = 'light';
export const themeContext = createContext(defaultTheme);

const ThemeContextProvicer = ({ children }: Props) => {
  const [theme, setTheme] = useState<string>(defaultTheme);

  return (
    <themeContext.Provider value={theme}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeContextProvicer;
