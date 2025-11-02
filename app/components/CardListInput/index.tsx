import { ReactElement, ReactNode, useState } from 'react';
import { Input } from './styles';
import i18n, { PAGES } from 'app/utils/localize';

interface CardListInputProps {
  cardList: string[];
  onChange: (newCardList: string[]) => void;
  children?: ReactNode;
}

const CardListInput = (props: CardListInputProps): ReactElement => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [, setInvalidCards] = useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    sanitizeCardList(event.target.value);
  };

  const sanitizeCardList = (rawText: string): void => {
    const lines = rawText.split('\n');
    const sanitizedLines: string[] = [];
    setIsValid(true);
    setInvalidCards([]);
    for (const line of lines) {
      if (line) {
        const [quantityStr, ...cardParts] = line.trim().split(' ');
        const quantity = parseInt(quantityStr, 10);
        const card = cardParts.join(' ').replace(/\s*\(.*$/, ''); // Remove anything after a parenthesis

        if (!isNaN(quantity) && quantity > 0) {
          if (quantity === 1) {
            sanitizedLines.push(card);
          } else {
            sanitizedLines.push(...Array<string>(quantity).fill(card));
          }
        } else {
          setIsValid(false);
          setInvalidCards((prevInvalidCards) => [...prevInvalidCards, line]);
        }
      }
    }
    if (isValid) {
      props.onChange(sanitizedLines);
    }
  };

  return (
    <>
      <Input onChange={(e) => handleChange(e)}/>
      {!isValid && (
        <div>
          <p>{i18n.t(PAGES.MAIN.INPUT_ERROR)}</p>
        </div>
      )}
    </>
  );
};

export default CardListInput;