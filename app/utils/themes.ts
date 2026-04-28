import { DefaultTheme } from 'styled-components';

// Desktop
const fontSize = '16px';
const h1FontSize = '50px';

// Mobile
const mediaFontSize = '50px';
const h1MediaFontSize = '50px';

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFFFFF
export const lightTheme: DefaultTheme = {
  // Base palette
  baseColor: '#fcfcfc',
  primaryColor: '#93BF73',
  secondaryColor: '#9F73BF',

  // Typography
  textColor: '#363537',
  fontSize,
  mediaFontSize,
  h1FontSize,
  h1MediaFontSize,

  // Links
  linkColor: undefined, // allow default
  linkVisitedColor: undefined, // allow default

  // Primary Buttons
  buttonBgColor: '#93BF73',
  buttonTextColor: '#363537',
  buttonHoverBgColor: '#95BFB3',
  buttonHoverTextColor: '#363537',
  buttonDisabledBgColor: '#D9D9D9',
  buttonDisabledTextColor: '#363537',

  // Secondary Buttons
  secondaryButtonBgColor: '#EAE6DA',
  secondaryButtonTextColor: '#2A2925',
  secondaryButtonHoverBgColor: '#D8D2C4',
  secondaryButtonHoverTextColor: '#1C1B19',
  secondaryButtonBorderColor: '#7A5C2E',

  // Inputs
  inputBgColor: '#fcfcfc',
  inputTextColor: '#363537',
  inputBorderColor: '#B0B0B0',
  inputFocusBorderColor: '#93BF73',
  inputPlaceholderColor: '#A9A9A9',

  // Feedback / States
  successColor: '#4CAF50',
  errorColor: '#D32F2F',
  warningColor: '#FFB300',
  infoColor: '#2196F3',

  // Layout tokens
  borderRadius: '6px',
  transitionDuration: '0.2s',
  zIndexModal: 1000,
};

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=363537
export const darkTheme: DefaultTheme = {
  // Base palette
  baseColor: '#363537',
  primaryColor: '#A1D17E',
  secondaryColor: '#AE7ED1',

  // Typography
  textColor: '#fcfcfc',
  fontSize,
  mediaFontSize,
  h1FontSize,
  h1MediaFontSize,

  // Links
  linkColor: '#8EBCFF',
  linkVisitedColor: '#EB9EFF',

  // Primary Buttons
  buttonBgColor: '#A1D17E',
  buttonTextColor: '#363537',
  buttonHoverBgColor: '#4A702F',
  buttonHoverTextColor: '#363537',
  buttonDisabledBgColor: '#4C4C4C',
  buttonDisabledTextColor: '#ABBF9C',

  // Secondary Buttons
  secondaryButtonBgColor: '#2C2A27',
  secondaryButtonTextColor: '#F8F3E7',
  secondaryButtonHoverBgColor: '#3B3935',
  secondaryButtonHoverTextColor: '#FFFFFF',
  secondaryButtonBorderColor: '#88714C',

  // Inputs
  inputBgColor: '#363537',
  inputTextColor: '#fcfcfc',
  inputBorderColor: '#fcfcfc',
  inputFocusBorderColor: '#A1D17E',
  inputPlaceholderColor: '#C5C5C5',

  // Feedback / States
  successColor: '#3DDC84',
  errorColor: '#EF5350',
  warningColor: '#FFC107',
  infoColor: '#64B5F6',

  // Layout tokens
  borderRadius: '6px',
  transitionDuration: '0.2s',
  zIndexModal: 1000,
};

export type ThemeMode = 'light' | 'dark';

export const getTheme = (mode: ThemeMode): DefaultTheme => {
  const themes: Record<ThemeMode, DefaultTheme> = {
    'light': lightTheme,
    'dark': darkTheme
  };

  return themes[mode];
};
