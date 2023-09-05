import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isOn, setIsOn] = useState(true);

  document.body.style.background = isOn ? "white" : "black";

  return (
    <ThemeContext.Provider value={{ isOn, setIsOn }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
