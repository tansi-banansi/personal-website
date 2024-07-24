import React from 'react';
import { useTheme } from '../context/ThemeContext';
import ThemeButton from '../components/ThemeButton';

const ThemeContainer = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return <ThemeButton theme={theme} onToggle={toggleTheme} />;
};

export default ThemeContainer;