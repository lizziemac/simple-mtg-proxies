import { ReactElement } from 'react';

import {
  CardContainer,
  CardName,
  CardType,
  CardArt,
  CardText,
  CardFooter,
} from './styles';
import { Card, DoubleSidedCard, SingleSidedCard, isDoubleSidedCard } from 'app/types/external/scryfall/card';
import { SymbolMap } from 'app/types/external/scryfall/symbol';
import CardSymbol from '../CardSymbol';

interface CardProps {
  card: Card;
  symbolLookup: SymbolMap;
}

const Card = (props: CardProps): ReactElement => {
  function renderWithSymbols(
    text: string
  ): React.ReactNode[] {
    const tokenRegex = /\{[^}]+\}/g; // Regex to match '{X}'

    const parts: React.ReactNode[] = [];
    let lastIndex = 0;

    let match: RegExpExecArray | null;
    // iterate through each regex match for the incoming string
    while ((match = tokenRegex.exec(text)) !== null) {
      const token = match[0];
      const symbol = token.replaceAll(/[{}]/g, '').replaceAll('/', '|');
      const index = match.index;

      // Push preceding text, if there is any
      if (index > lastIndex) {
        parts.push(text.slice(lastIndex, index));
      }

      // Determine replacement element
      const element: ReactElement | null = <CardSymbol key={index} name={symbol} />;

      if (element) {
        parts.push(element);
      } else {
        parts.push(token);
      }

      lastIndex = index + token.length; // update the last index to the last character we used
    }

    // Push remainder text once we've iterated through all {X}
    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex));
    }

    return parts;
  }

  const SingleSidedCardComponent = (card: SingleSidedCard): JSX.Element => {
    return (
      <CardContainer>
        <CardName>
          <div>{card.name}</div>
          <div>{renderWithSymbols(card.mana_cost)}</div>
        </CardName>
        <CardArt />
        <CardType>{card.type_line}</CardType>
        <CardText>
          {card.oracle_text.split('\n').map((line, idx) => (
            <span key={idx}>
              {renderWithSymbols(line)}
              <br />
            </span>
          ))}
        </CardText>
        {/* support split and adventure cards later */}
        <CardFooter>
          {card.power && card.toughness ? `${card.power}/${card.toughness}` : ''}
          {card.loyalty ? `${card.loyalty}` : ''}
        </CardFooter>
      </CardContainer>
    );
  };

  const DoubleSidedCardComponent = (card: DoubleSidedCard): JSX.Element => {
    return (
      <>
        {
          card.card_faces.map((face: SingleSidedCard) => (
            <SingleSidedCardComponent key={face.name} {...face} />
          ))
        }
      </>
    );
  };


  return (
    <>
      {isDoubleSidedCard(props.card)
        // support meld cards later
        ? DoubleSidedCardComponent(props.card)
        : SingleSidedCardComponent(props.card)
      }
    </>
  );

};

export default Card;