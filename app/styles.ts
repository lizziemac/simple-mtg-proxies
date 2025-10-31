import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  .smooth {
    background-color: ${({ theme }): string => theme.baseColor};
  }

  .preload {
    transition: background-color 0s !important;
    -webkit-transition: background-color 0s !important;
    -moz-transition: background-color 0s !important;
    -ms-transition: background-color 0s !important;
    -o-transition: background-color 0s !important;
  }

  html {
    height: 100%;
  }

  body {
    position: relative;
    margin: 0;
    min-height: 100%;
    background-color: ${({ theme }): string => theme.baseColor};
    color: ${({ theme }): string => theme.textColor};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: background-color 1.5s ease;

    @media only screen and (max-width:1000px){
      font-size: ${({ theme }): string => theme.mediaFontSize};
    }
  }

  a {
    color: ${({ theme }): string | undefined => theme.linkColor};
    @media only screen and (max-width:1000px){
      font-size: ${({ theme }): string => theme.mediaFontSize};
    }
  }
  a:visited {
    color: ${({ theme }): string | undefined => theme.linkVisitedColor};
  }


  h1 {
    text-align: center;
  }

  * {
    margin: 0;
  }
`;
