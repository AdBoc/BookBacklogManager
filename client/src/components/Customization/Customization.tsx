import React, { useContext } from "react";
import { themeContext } from "../../hooks/useContext/contexts/themeContext";
import './Customization.scss';

const Customization: React.FC = (): JSX.Element => {
  const { theme, setTheme } = useContext(themeContext);

  const changeTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  }

  return (
    <div className={theme === "light" ? "customization light-mode" : "customization dark-mode"}>
      <div>User Customization</div>
      {/* <div>Current Theme: {theme}</div> */}
      <button className="customization__themeButton" onClick={changeTheme}>Change Theme</button>
      <button className="customization__themeButton--red" onClick={changeTheme}>Delete Account</button>
    </div >
  )
}

export default Customization;