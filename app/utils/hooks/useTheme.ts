/*
 * "Implementing Dark Mode In React Apps Using styled-components"
 * by Blessing Krofegha (https://www.smashingmagazine.com/2020/04/dark-mode-react-apps-styled-components/)
 */
import { useLayoutEffect, useState } from 'react';
import { ThemeMode, getTheme as getStaticTheme } from  '../themes';

export const getTheme = (): ThemeMode => {
  const preferredTheme = window.localStorage.getItem('theme');
  const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  return (preferredTheme || defaultTheme) as ThemeMode;
};

export const useTheme = (): {theme: ThemeMode, toggleTheme: () => void, isMounted: boolean} => {
  const [theme, setTheme] = useState<ThemeMode>(
    // on first load/refresh, use system preference...if no local storage value
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const [isMounted, setIsMounted] = useState<boolean>(false);

  const setMode = (mode: ThemeMode): void => {
    window.localStorage.setItem('theme', mode);
    window.localStorage.setItem('bg-color', getStaticTheme(mode).baseColor);
    setTheme(mode);
  };

  const toggleTheme = (): void => {
    if (theme === 'light') {
      setMode('dark');
    } else {
      setMode('light');
    }
  };

  useLayoutEffect(() => {
    const localTheme: ThemeMode = window.localStorage.getItem('theme') as ThemeMode;
    if (localTheme !== theme && localTheme !== null) {
      setMode(localTheme);
    }
    setIsMounted(true);
  }, [window]);

  return { theme, toggleTheme, isMounted };
};
