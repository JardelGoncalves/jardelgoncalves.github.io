import { useEffect, useState } from 'react';
import { THEME } from './constants';
import {setTheme} from './set-theme'

export const useDarkMode = () => {
  const [mode, setMode] = useState(window.localStorage.getItem(THEME) || 'light');
  const toggleTheme = () => {
    if (mode === 'light') {
      window.localStorage.setItem(THEME, 'dark')
      setTheme('dark')
      setMode('dark')
    } else {
      window.localStorage.setItem(THEME, 'light')
      setTheme('light')
      setMode('light')
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME);
    setTheme(localTheme || 'light');
  }, []);

  return [mode === 'dark', toggleTheme]
};