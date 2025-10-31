import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  height?: string;
}

const Loading = styled.div<LoadingProps>`
  height: ${({ height = '100vh' }): string => height};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-style: italic;

  background: ${({ theme }): string => theme.baseColor};

  @media only screen and (max-width:1000px){
  }
`;

const rippleAnimation = keyframes`
  0% {
    visibility: hidden;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    visibility: block;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }
`;

interface RippleProps {
  size?: string;        // total width/height (px, em, etc.)
  borderWidth?: string; // ring thickness in px
}

export const Ripple = styled.div<RippleProps>`
  display: inline-block;
  position: relative;
  width: ${({ size = '80px' }): string => size};
  height: ${({ size = '80px' }): string => size};

  div {
    position: absolute;
    border: ${({ borderWidth = '4px', theme }): string => `${borderWidth} solid ${theme.textColor}`};
    opacity: 1;
    border-radius: 50%;
    animation: ${rippleAnimation} 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  div:nth-child(2) {
    animation-delay: -1s
  }
`;

export default Loading;