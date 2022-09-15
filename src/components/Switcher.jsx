import React from 'react'
import { useEffect } from 'react';
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from '../hooks/useDarkMode';

function Switcher() {

    const [colorTheme, setTheme] = useDarkMode();
    const [isDarkMode, setDarkMode] = useState( colorTheme === "light" ? true : false);

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkMode(checked);
    };


  return (
    <div>
        <DarkModeSwitch
        className='md:my-0 my-5'
        onChange={toggleDarkMode} 
        checked={isDarkMode}
        size={25}
        />
    </div>
  )
}

export default Switcher