import styled from 'styled-components';

interface StyledButtonProps {
  iconRight?: boolean,
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
}

export const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  ${({ size }): string => {
    switch (size) {
    case 'xs':
      return `
        min-width: 60px;
      `;
    case 's':
      return `
        min-width: 80px;
      `;
    case 'm':
      return `
        min-width: 100px;
      `;
    case 'l':
      return `
        min-width: 120px;
      `;
    case 'xl':
      return `
        min-width: 140px;
      `;
    default:
      return `
        min-width: 100px;
      `;
    }
  }}

  background-color: ${({ theme }): string => theme.buttonBgColor};
  color: ${({ theme }): string => theme.buttonTextColor};
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
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

  ${({ iconRight }): string => iconRight ? 'flex-direction: row-reverse;' : ''}
`;
