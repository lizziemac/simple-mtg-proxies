import { DefaultTheme } from 'styled-components';

// Desktop
const fontSize = '16px';
const h1FontSize = 'calc(1.5vmin)';

// Mobile
const mediaFontSize = 'calc(20px + 2vmin)';
const h1MediaFontSize = 'calc(40px + 2vmin)';

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFFFFF
export const lightTheme: DefaultTheme = {
  primaryColor: '#fcfcfc',
  primaryLightColor: '#FFF',
  primaryDarkColor: '#cccccc',
  primaryBorderColor: '#6B8096',
  secondaryColor: '#61ac64',
  disabledColor: 'lightgray',
  textColor: '#363537',
  hover: '#80ad82',
  fontSize,
  mediaFontSize,
  h1FontSize,
  h1MediaFontSize,
  linkColor: undefined,        // allow default
  linkVisitedColor: undefined, // allow default
};

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=363537
export const darkTheme: DefaultTheme = {
  primaryColor: '#363537',
  primaryLightColor: '#605f61',
  primaryDarkColor: '#100f11',
  primaryBorderColor: '#6B8096',
  secondaryColor: '#217c25',
  disabledColor: 'gray',
  textColor: '#FFF',
  hover: '#718f72',
  fontSize,
  mediaFontSize,
  h1FontSize,
  h1MediaFontSize,
  linkColor: '#8EBCFF',
  linkVisitedColor: '#EB9EFF',
};

export type ThemeMode = 'light' | 'dark';

export const getTheme = (mode: ThemeMode): DefaultTheme => {
  const themes: Record<ThemeMode, DefaultTheme> = {
    'light': lightTheme,
    'dark': darkTheme
  };

  return themes[mode];
};
