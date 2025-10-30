import styled from 'styled-components';

export const Foot = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  gap: 1em;
  bottom: 0;
  margin-top: 0.5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  color: ${({ theme }): string => theme.textColor} !important;
`;
