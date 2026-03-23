import  { createContext, useEffect, useState } from 'react'


export const ThemeContext = createContext();


export const ThemProvider = ({children}) => {

    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) setTheme(savedTheme);
      }, []);
    
    
      useEffect(() => {
        const html = document.documentElement;
        if (theme === "dark") {
          html.classList.add("dark");
        } else {
          html.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
      }, [theme]);
    
      const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
      };
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
