import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    primaryColor: string;
    primaryLightColor: string;
    primaryDarkColor: string;
    primaryBorderColor: string;
    secondaryColor: string;
    disabledColor: string;
    textColor: string;
    hover: string;
    fontSize: string;
    mediaFontSize: string;
    h1FontSize: string;
    h1MediaFontSize: string;
    linkColor?: string;
    linkVisitedColor?: string;
  }
}
