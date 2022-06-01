import { createContext, useState } from "react";

const ThemeContext = createContext();

export const Theme = (props) => {
  const [theme, setTheme] = useState("light");
  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("danger");
    } else if (theme === "danger") {
      setTheme("warning");
    } else if (theme === "warning") {
      setTheme("primary");
    } else if (theme === "primary") {
      setTheme("success");
    } else if(theme==="success") {
      setTheme("secondary");
    }else{
      setTheme("light");
    }
  }
  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContext;
