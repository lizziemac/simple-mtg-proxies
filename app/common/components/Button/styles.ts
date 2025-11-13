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
  gap: 0.5em;
  ${({ size }): string => {
    switch (size) {
      case Size.XS:
        return `
          min-width: 60px;
        `;
      case Size.S:
        return `
          min-width: 80px;
        `;
      case Size.L:
        return `
          min-width: 120px;
        `;
      case Size.XL:
        return `
          min-width: 240px;
        `;
      case Size.M:
      default:
        return `
          min-width: 100px;
        `;
    }
  }}

  ${({ iconOnly }): string => iconOnly ? 'padding: 0;': 'padding: 1rem 2rem;'};
  @media screen and (max-width: 1000px) {
    ${({ iconOnly }): string => !iconOnly ? 'width: 100%': ''};
    // padding: 0.75em 1em;
  }

  background-color: ${({ theme }): string => theme.buttonBgColor};
  color: ${({ theme }): string => theme.buttonTextColor};
  border: none;
  border-radius: 10px;
  font-size: 1em;
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

