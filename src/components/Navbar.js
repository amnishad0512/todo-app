import React, { useContext } from "react";
import ThemeContext from "../context/Theme";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <nav className={`navbar navbar-expand-lg bg-${theme}`}>
      <div className="container-fluid">
      <button className={`btn btn-${theme} disabled`} onClick={toggleTheme}>
            My Todos
          </button>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0"></ul>
          <button className={`btn btn-${theme} border`} onClick={toggleTheme}>
            Change Theme
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
