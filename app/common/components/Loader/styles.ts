import styled from 'styled-components';

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


export default Loading;