import styled from 'styled-components';

export const StyledFooter = styled.div`
  width: 100%;
  display: flex;
  position: static;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  bottom: 0;
  margin-top: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: ${({ theme }): string => theme.textColor} !important;

  @media screen and (max-width:1000px){
    padding-top: ${({ theme }): string => `${theme.mediaFontSize}`}
  }

  // Hide footer when printing
  @media print {
    display: none !important;
  }
`;

export const StyledDisclaimer = styled.div`
  display: flex;
  font-size: 0.65em;
  text-align: center;
  justify-content: center;
  padding-bottom: 1em;
`;

export const StyledDisclaimerText = styled.div`
  max-width: 40rem;
  
  @media screen and (max-width:1000px) {
    width: 100%;
  }
`;