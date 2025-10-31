import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Base palette
    baseColor: string;
    primaryColor: string;
    secondaryColor: string;

    // Typography
    textColor: string;
    fontSize: string;
    mediaFontSize: string;
    h1FontSize: string;
    h1MediaFontSize: string;

    // Links
    linkColor?: string;
    linkVisitedColor?: string;

    // Primary Buttons
    buttonBgColor: string;
    buttonTextColor: string;
    buttonHoverBgColor: string;
    buttonHoverTextColor: string;
    buttonDisabledBgColor: string;
    buttonDisabledTextColor: string;

    // Secondary Buttons
    secondaryButtonBgColor: string;
    secondaryButtonTextColor: string;
    secondaryButtonHoverBgColor: string;
    secondaryButtonHoverTextColor: string;
    secondaryButtonBorderColor: string;

    // Inputs
    inputBgColor: string;
    inputTextColor: string;
    inputBorderColor: string;
    inputFocusBorderColor: string;
    inputPlaceholderColor: string;

    // States / Feedback
    successColor: string;
    errorColor: string;
    warningColor: string;
    infoColor: string;

    // Layout tokens
    borderRadius?: string;
    transitionDuration?: string;
    zIndexModal?: number;
  }
}
