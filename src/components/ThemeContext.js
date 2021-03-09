import React, { useState, useLayoutEffect } from 'react';

const ThemeContext = React.createContext({
  dark: false,
  toggle: () => {},
});

export default ThemeContext;

export const ThemeConsumer = ThemeContext.Consumer;

export function ThemeProvider (props) {
  // keeps state of the current chosen theme
  const [dark, setDark] = useState(window.localStorage.getItem('darkTheme'));
  
  // paints the app before it renders elements
  useLayoutEffect(() => {
    const lastTheme = window.localStorage.getItem('darkTheme');
    
    if (lastTheme === 'true') {
      setDark(true);
      applyTheme(darkTheme);
    }

    if (!lastTheme || lastTheme === 'false') {
      setDark(false);
      applyTheme(lightTheme);
    } 
  // if state changes, repaints the app
  }, [dark]);
  
  const applyTheme = theme => {
    const root = document.getElementsByTagName('html')[0];
    root.style.cssText = theme.join(';');
  }

  const toggle = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.cssText = 'transition: background .5s ease';
    setDark(!dark);
    window.localStorage.setItem('darkTheme', !dark);
  };
  
  return (<ThemeContext.Provider value={{
    dark,
    toggle,
  }}>
    {props.children}
  </ThemeContext.Provider>)
}

// styles
const lightTheme = [
  '--border: #000',
  '--heading: #0f0e17',
  '--main: #ff8906',
  '--secondary: #f25f4c',
  '--text: #0f0e17',
  '--textAlt: #2e2f3e',
  '--background: #ffffe7'
];

const darkTheme = [
  '--border: #000',
  '--heading: #fffffe',
  '--main: #ff8906',
  '--secondary: #f25f4c',
  '--text: #fffffe',
  '--textAlt: #b7f9fe',
  '--background: #0f0e17'
];