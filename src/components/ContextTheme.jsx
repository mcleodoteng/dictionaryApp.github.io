import { createContext, useContext, useState } from "react"
import { PropTypes } from 'prop-types'

const ThemeContext = createContext();

export const ContextTheme = ({ children }) => {
    const [darkTheme, setDarkTheme] = useState(false);

    function themeHandler(){
        setDarkTheme((prev) => !prev);
    }
  return (
    
    <ThemeContext.Provider value={{darkTheme,themeHandler}}>
        {children}
    </ThemeContext.Provider>
  );
};
ContextTheme.propTypes = {
  children: PropTypes.any
}
export const GetThemeValues = () => useContext(ThemeContext);