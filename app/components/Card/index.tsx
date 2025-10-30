import { ReactElement } from 'react';
import {
  CardBorder,
  CardHeader,
  CardType,
  CardArt,
  CardText,
  CardFooter,
} from './styles';
import { Card, DoubleSidedCard, SingleSidedCard, isDoubleSidedCard } from 'app/types/external/scryfall';

interface CardProps {
  card: Card;
}

const Card = (props: CardProps): ReactElement => {

  const SingleSidedCardComponent = (card: SingleSidedCard): JSX.Element => {
    return (
      <CardBorder>
        <CardHeader>
          <div>{card.name}</div>
          <div>{card.mana_cost}</div>
        </CardHeader>
        <CardArt />
        <CardType>{card.type_line}</CardType>
        <CardText>
          {card.oracle_text.split('\n').map((line, idx) => (
            <span key={idx}>
              {line}
              <br />
            </span>
          ))}
        </CardText>
        {/* support split and adventure cards later */}
        <CardFooter>
          {card.power && card.toughness ? `${card.power}/${card.toughness}` : ''}
          {card.loyalty ? `${card.loyalty}` : ''}
        </CardFooter>
      </CardBorder>
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