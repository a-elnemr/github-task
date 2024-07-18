// src/context/ThemeContext.js
import React, {createContext, useState, useContext} from 'react';

const lightTheme = {
  primary: 'blue',
  background: '#EAEFF2',
  background2: 'white',
  text: 'black',
  textColor: '#00008b',
  view1: '#dda0dd',
  border: 'transparent',
  border2: 'grey',
  text3: 'grey',
  text4: 'red',
  loader: '#3B5998',
  icon: 'black',
};

const darkTheme = {
  primary: 'lightblue',
  background: '#000000',
  background2: '#2E2E2E',
  text: 'white',
  textColor: 'white',
  view1: '#00fa9a',
  border: 'grey',
  border2: 'lightgrey',
  text3: 'white',
  text4: 'yellow',
  loader: '#00fa9a',
  icon: 'yellow',
};

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{isDarkTheme, toggleTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
