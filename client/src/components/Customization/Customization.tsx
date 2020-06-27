import React, { useContext } from "react";
import { themeContext } from "../../contexts/themeContext";
import './Customization.scss';

const Customization: React.FC = (): JSX.Element => {
  const { theme, setTheme } = useContext(themeContext);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className={theme === "light" ? "customization light-mode" : "customization dark-mode"}>
      <div>Customization</div>
      <div>Current Theme: {theme}</div>
      <button onClick={changeTheme}>Dark Mode</button>
    </div >
  )
}

export default Customization;