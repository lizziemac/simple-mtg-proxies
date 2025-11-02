import styled from 'styled-components';

export const Input = styled.textarea`
  width: 100%;
  padding: 0.5em;
  height: 20em;
  font-size: 1em;
  box-sizing: border-box;
  border: 1px solid ${({ theme }): string => theme.inputBorderColor};
  border-radius: 5px;
  background-color: ${({ theme }): string =>  theme.inputBgColor};
  color: ${({ theme }): string => theme.textColor};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }): string => theme.inputFocusBorderColor};
    box-shadow: 0 0 5px ${({ theme }): string => theme.inputFocusBorderColor};
  }

  @media only screen and (max-width:1000px){
    height: auto;
    min-height: 8em;
  }
`;