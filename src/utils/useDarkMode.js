import { useEffect, useState } from 'react';
import { THEME } from './constants';
import {setTheme} from './set-theme'

export const useDarkMode = () => {
  const [modeSelected, setModeSelected] = useState('light')
  const toggleTheme = () => {
    const mode = window.localStorage.getItem(THEME)
    
    if (mode === 'light') {
      window.localStorage.setItem(THEME, 'dark')
      setTheme('dark')
      setModeSelected('dark')
    } else {
      window.localStorage.setItem(THEME, 'light')
      setTheme('light')
      setModeSelected('light')
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem(THEME);
    setTheme(localTheme || 'light');
    setModeSelected(localTheme || 'light')

  }, []);

  return [modeSelected === 'dark', toggleTheme]
};