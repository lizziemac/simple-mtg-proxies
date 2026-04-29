import styled from 'styled-components';

export const InputContainer = styled.div`
  position: relative;
`;

export const Input = styled.textarea`
  display: block;
  width: 100%;
  padding: 0.5em;
  height: 20em;
  font-size: 1em;
  box-sizing: border-box;
  border: 1px solid ${({ theme }): string => theme.inputBorderColor};
  border-radius: 10px;
  background-color: ${({ theme }): string =>  theme.inputBgColor};
  color: ${({ theme }): string => theme.textColor};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }): string => theme.inputFocusBorderColor};
    box-shadow: 0 0 5px ${({ theme }): string => theme.inputFocusBorderColor};
  }

  @media only screen and (max-width:1000px){
    height: 30vh;
  }
`;

export const OverlayButtonGroup = styled.div`
  position: absolute;
  bottom: 0.5em;
  right: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 0.25em;
`;

const OverlayButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 1;
  font-size: inherit;

  svg {
    width: 1em;
    height: 1em;
  }

  background: ${({ theme }): string => theme.inputBgColor};
  border: 1px solid ${({ theme }): string => theme.inputBorderColor};
  border-radius: 6px;
  color: ${({ theme }): string => theme.textColor};
  cursor: pointer;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    border-color: ${({ theme }): string => theme.inputFocusBorderColor};
  }
`;

export const ClearButton = styled(OverlayButton)``;

export const PasteButton = styled(OverlayButton)``;
