import React from 'react'
import { useTheme } from '../context/ThemeContext';

const DownArrowButton = () =>{
    const {theme} = useTheme();
    return(
        <button className='size-6 hover:opacity-70' >
            <img src={theme === 'light' ? './files/light-mode-double-arrow.svg' : './files/dark-mode-double-arrow.svg'}
                alt='Go Down Button'
             />
        </button>
    )
    
}

export default DownArrowButton;
