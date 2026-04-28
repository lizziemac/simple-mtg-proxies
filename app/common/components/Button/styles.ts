import { Size } from 'app/constants';
import styled from 'styled-components';

interface StyledButtonProps {
  size?: Size;
  iconOnly?: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ iconOnly }): string => iconOnly ? 'padding: 0;': 'padding: 1rem 2rem;'};
  @media screen and (max-width: 1000px) {
    ${({ iconOnly }): string => !iconOnly ? 'width: 100%': ''};
  }

  font-size: inherit;
  background-color: ${({ theme }): string => theme.buttonBgColor};
  color: ${({ theme }): string => theme.buttonTextColor};
  border: none;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }): string => theme.buttonHoverBgColor};
  }

  &:disabled {
    background-color: ${({ theme }): string => theme.buttonDisabledBgColor};
    color: ${({ theme }): string => theme.buttonDisabledTextColor};
    cursor: not-allowed;
  }
`;

