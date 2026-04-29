import { ReactElement, ReactNode, useState } from 'react';
import { Clipboard, Eraser } from 'lucide-react';
import { Input, InputContainer, OverlayButtonGroup, PasteButton, ClearButton } from './styles';
import i18n, { PAGES } from 'app/utils/localize';

interface CardListInputProps {
  cardList: string[];
  onChange: (newCardList: string[]) => void;
  children?: ReactNode;
}

const CardListInput = (props: CardListInputProps): ReactElement => {
  const [isValid, setIsValid] = useState<boolean>(true);
  const [, setInvalidCards] = useState<string[]>([]);
  const [rawText, setRawText] = useState<string>('');

  const sanitizeCardList = (text: string): void => {
    const lines = text.split('\n');
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

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setRawText(event.target.value);
    sanitizeCardList(event.target.value);
  };

  const handleClear = (): void => {
    setRawText('');
    setIsValid(true);
    setInvalidCards([]);
    props.onChange([]);
  };

  const handlePaste = (): void => {
    if (!navigator.clipboard?.readText) return;
    navigator.clipboard.readText().then((text) => {
      setRawText(text);
      sanitizeCardList(text);
    }).catch(() => { /* clipboard permission denied */ });
  };

  return (
    <>
      <InputContainer>
        <Input value={rawText} onChange={handleChange} />
        <OverlayButtonGroup>
          <ClearButton onClick={handleClear} title={i18n.t(PAGES.MAIN.BUTTONS.CLEAR)}>
            <Eraser />
          </ClearButton>
          <PasteButton onClick={handlePaste} title={i18n.t(PAGES.MAIN.BUTTONS.PASTE)}>
            <Clipboard />
          </PasteButton>
        </OverlayButtonGroup>
      </InputContainer>
      {!isValid && (
        <p>{i18n.t(PAGES.MAIN.INPUT_ERROR)}</p>
      )}
    </>
  );
};

export default CardListInput;
