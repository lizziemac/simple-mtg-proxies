import styled from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.textarea`
  display: flex;
  justify-content: center;
  width: 50%;
  height: 20em;
  font-size: 1em;
  padding: 10px;
  border: 1px solid ${({ theme }): string =>  theme.primaryBorderColor};
  border-radius: 5px;
  background-color: ${({ theme }): string =>  theme.primaryColor};
  color: ${({ theme }): string => theme.textColor};
  resize: vertical;

  &:focus {
    outline: none;
    border-color: ${({ theme }): string => theme.secondaryColor};
    box-shadow: 0 0 5px ${({ theme }): string => theme.secondaryColor};
  }

  @media only screen and (max-width:1000px){
    width: 90%;
  }
`;