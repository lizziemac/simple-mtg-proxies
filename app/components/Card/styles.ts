import styled from 'styled-components';

export const CardBorder = styled.div`
  width: 63mm;
  height: 88mm;
  border: 1px solid black;
  background-color: white;
  color: black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  background: white;
  font-family: 'times';
  overflow: hidden;
`;

export const CardHeader = styled.div`
  color: inherit;
  padding: 10px 10px 4px 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 0.8em;
`;

export const CardType = styled.div`
  background-color: inherit;
  color: inherit;
  margin: -10px 8px 4px 8px;
  padding: 0 4px 0 4px;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 0.7em;
`;

export const CardArt = styled.div`
  color: inherit;
  height: 30mm;
  border: 1px solid black;
  margin: 0 12px 0 12px;
`;

export const CardText = styled.div`
  color: inherit;
  flex: 1;
  padding: 0px 10px 4px 10px;
  font-size: 0.75em;
`;

export const CardFooter = styled.div`
  color: inherit;
  padding: 4px 10px 10px;
  display: flex;
  align-content: right;
  justify-content: flex-end;
  font-size: 0.8em;
  font-weight: 600;
`;