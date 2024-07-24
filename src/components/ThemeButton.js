import React from 'react';

const ThemeButton = ({ theme, onToggle }) => {
  return (
    <button onClick={onToggle}>
      <img 
        src={theme === 'dark' ? './files/light-mode-button.svg' : './files/dark-mode-button.svg'}
        alt='Theme Toggle'
      />
    </button>
  );
};

export default ThemeButton;