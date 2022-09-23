import React,{useContext, useState , createContext} from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const recentTheme = JSON.parse(localStorage.getItem('theme'));
  const [darkMode, setDarkMode] = useState(recentTheme? recentTheme : false)

    return (
        <DarkModeContext.Provider value={{darkMode,setDarkMode}}>
          {children}
        </DarkModeContext.Provider>
      );
    
}

export const useDarkMode = () => useContext(DarkModeContext);
