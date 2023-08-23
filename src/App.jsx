import './App.css'
import HomePage from './components/HomePage';
import logo from '../src/assets/dictionary-web-app/dictionary-web-app/assets/images/logo.svg'
import moon from '../src/assets/dictionary-web-app/dictionary-web-app/assets/images/icon-moon.svg'
import ReactSwitch from "react-switch"
import { createContext, useState } from 'react';
export const ThemeContext = createContext(null);


function App() {
  const [fontName , setFontName] = useState("sans")
  const [theme, setTheme] = useState("light")
  const toggleTheme = () => {
    setTheme((curr) => ( curr === "light" ? "dark" : "light"));
  };
  const SelectFont = (e) => {
    setFontName(e.target.value);
    console.log(fontName)
}

  return ( 
    
    <ThemeContext.Provider value={{ theme, toggleTheme}}>
      <div className="App" id={theme}>
        <div id={fontName}>

        
        <div className='flex justify-between'>
            <img src={logo} alt="Logo" width={20} height={20} className='xl:w-[30px] lg:w-[25px] md:w-[20px]'/>
            
            <div className='flex gap-3 md:gap-5 lg:gap-7 xl:gap-7 md:mr-6 lg:mr-5 xl:mr-6'>

                <select value={fontName} id={fontName} onChange={SelectFont} className='text-[#A445ED] w-[70px] text-sm md:text-sm lg:text-sm xl:text-sm xl:tracking-widest'>
                    <option value="sans"> Sans</option>
                    <option value="serif">Serif</option>
                    <option value="mono">Mono</option>
                </select>

                
                <p className='text-xl md:text-2xl lg:text-3xl lg:-mt-0.5 xl:text-4xl xl:-mt-0.5'>|</p>
                <div className="switch">
                  <ReactSwitch className='mt-1 lg:mt-2 xl:mt-3' width={35} height={20} onChange={toggleTheme} checked={theme === "dark"}/>
                </div>
                
                
                <img src={moon} alt="Logo" width={20} height={20} className='xl:w-[25px] xl:mt-1 xl:-ml-3 lg:w-[21px] lg:mt-0 lg:-ml-3 lg:h-[30px] md:w-[17px] md:mt-0.5 md:h-[26px] xl:h-[32px] mr-3 -ml-1 -mt-1 ' />

            </div>
            
        </div>
        <HomePage />
        </div>
      </div>
    </ThemeContext.Provider>
      
    
  )
}

export default App
