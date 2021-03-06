import React, { useContext } from 'react';
import { IoMdMoon as Moon, IoMdSunny as Sun } from 'react-icons/io';

import ThemeContext from '../ThemeContext';

export default function Switch () {
  const { dark, toggle } = useContext(ThemeContext);
  
  return (
    <button 
      className='Switch theme-switch'
      onClick={() => toggle()}
    >
      <Sun className={`icon sun ${!dark ? 'active' : 'inactive'}`}/>
      <Moon className={`icon moon ${dark ? 'active' : 'inactive'}`}/>
    </button>
  );
} 