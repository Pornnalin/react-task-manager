import React from "react";
import "./Header.css";
import { IoSunny } from "react-icons/io5";
import { FaMoon } from "react-icons/fa";
export default function Header({ theme, setTheme }) {
  const ToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <header className={theme === "light" ? "" : "header-dark"}>
      <div className={"logo"}>
        <span>Task Management</span>
      </div>
      <div className="theme-container">
        <span>{theme === "light" ? "โหมดกลางวัน" : "โหมดกลางคืน"}</span>
        <span className="icon" onClick={ToggleTheme}>
          {theme === "light" ? <IoSunny /> : <FaMoon />}
        </span>
      </div>
    </header>
  );
}
