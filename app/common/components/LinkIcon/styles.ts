import styled from 'styled-components';

export const LinkIconSVG = styled.svg`
  fill: ${({ theme }): string => theme.textColor};
  height: ${({ theme }): string => theme.fontSize};
  width: ${({ theme }): string => theme.fontSize};
  color: ${({ theme }): string => theme.textColor};

  @media only screen and (max-width:1000px){
    height: ${({ theme }): string => theme.mediaFontSize};
    width: ${({ theme }): string => theme.mediaFontSize};
  }
`;