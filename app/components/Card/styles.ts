import styled from 'styled-components';

const MTG_CARD_HEIGHT_MM: number = 88;
const MTG_CARD_WIDTH_MM: number = 63;

export const CardContainer = styled.div`
  width: ${MTG_CARD_WIDTH_MM}mm;
  height: ${MTG_CARD_HEIGHT_MM}mm;
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

export const SplitCardTop = styled.div`
  height: ${MTG_CARD_HEIGHT_MM/2}mm;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`;

export const SplitCardBottom = styled.div`
  display: flex;
  flex-direction: column;
  height: ${MTG_CARD_HEIGHT_MM/2}mm;
`;

export const SplitCardBottomContents = styled.div`
  transform: rotate(-90deg) translate(-100%, 0%);
  transform-origin: top left;
  width: ${MTG_CARD_HEIGHT_MM/2}mm; // IMPORTANT. When transformed, width becomes height.
`;

export const CardName = styled.div`
  color: inherit;
  padding: 10px 10px 4px 10px;
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 3.2mm;
`;

export const CardType = styled.div`
  background-color: #fff;
  color: inherit;
  margin: -10px 8px 4px 8px;
  padding: 0 4px 0 4px;
  border: 1px solid black;
  border-radius: 12px;
  font-size: 3mm;
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
  font-size: 3mm;
`;

export const CardFooter = styled.div`
  color: inherit;
  padding: 4px 10px 10px;
  display: flex;
  align-content: right;
  justify-content: flex-end;
  font-size: 4mm;
  font-weight: 600;
`;