import React from 'react'
import { useTheme } from '../context/ThemeContext';

const OpenInNewButton = () =>{
    const {theme} = useTheme();
    return(
        <button className='size-4 hover:opacity-60 flex items-center' >
            <img src={theme === 'light' ? './files/light-mode-open-in-new.svg' : './files/dark-mode-open-in-new.svg'}
                alt='Open in New Button'
             />
        </button>
    )
    
}

export default OpenInNewButton;
