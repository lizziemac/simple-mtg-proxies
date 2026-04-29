import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  display: block;
  border: none;
  padding: 0 !important;
  cursor: pointer;
  color: ${({ theme }): string => theme.textColor};
  font-size: ${({ theme }): string => theme.fontSize};

  @media only screen and (max-width:1000px){
    font-size: ${({ theme }): string => theme.mediaFontSize};
  }
`;
export default Button;

// https://codepen.io/bheberer/pen/BaNZKmq