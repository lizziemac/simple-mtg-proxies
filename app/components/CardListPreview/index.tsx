import { ReactElement, useEffect, useRef, useState } from 'react';
import html2pdf from 'html2pdf.js';

import { fetchScryfallCardListByNames } from 'app/services/external/scryfall/card';
import {
  Card,
  isDoubleSidedCard,
} from 'app/types/external/scryfall/card';
import CardComponent from 'app/components/Card';
import Loader from 'app/common/components/Loader';
import Button from 'app/common/components/Button';

import { PrintArea, Page, PreviewContainerParent, PreviewContainer, ActionButtonsContainer } from './styles';
import CardListInput from '../CardListInput';

import { Size } from 'app/constants';
import i18n, { PAGES } from 'app/utils/localize';
import { isMobile } from 'app/utils/helpers';
import { getSymbolLookup } from 'app/services/external/scryfall/symbol';
import { SymbolMap } from 'app/types/external/scryfall/symbol';
import { Ripple } from 'app/common/components/Ripple';

const CARDS_PER_PAGE = 9; // 3 columns x 3 rows

const CardListPDFGenerator = (): ReactElement => {
  const [cardList, setCardList] = useState<string[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [readyToPrint, setReadyToPrint] = useState<boolean>(false);
  const [isPdfMode, setIsPdfMode] = useState<boolean>(false);

  const [cardData, setCardData] = useState<Card[]>([]);
  const [pages, setPages] = useState<Card[][]>([]);

  const printAreaRef = useRef<HTMLDivElement>(null);
  const lastPageRef = useRef<HTMLDivElement>(null);
  const [symbolLookup, setSymbolLookup] = useState<SymbolMap>({});

  useEffect(() => {
    let active = true;
    async function loadSymbols(): Promise<void> {
      try {
        const symbols = await getSymbolLookup();
        if (active) setSymbolLookup(symbols);
      } catch (error) {
        console.error(error);
      }
    }

    void loadSymbols();

    return (): void => {
      active = false; // cancel state updates if unmounted
    };
  }, []);


  useEffect(() => {
    setReadyToPrint(false);
  }, [cardList]);

  useEffect(() => {
    if (cardData.length > 0) {
      setPages(chunkCards(cardData, CARDS_PER_PAGE));
    }
  }, [cardData]);

  useEffect(() => {
    if (pages.length > 0 && lastPageRef.current) {
      setReadyToPrint(true);
    }
  }, [pages]);

  const chunkCards = <C extends Card>(cards: C[], chunkSize: number): Card[][] => {
    const chunks: Card[][] = [];
    const singleSidedCards: Card[] = cards.flatMap((card: Card): Card[] => {
      if (isDoubleSidedCard(card)) {
        return Array(card.quantity).fill(card.card_faces).flat() as Card[];
      }
      return Array(card.quantity).fill(card) as Card[];
    });

    for (let i = 0; i < singleSidedCards.length; i += chunkSize) {
      chunks.push(singleSidedCards.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const fetchCardData = async (): Promise<void> => {
    setHasError(false);
    setErrorMessage('');
    setIsLoading(true);
    setCardData([]);

    const uniqueCards: Map<string, number> = new Map<string, number>();
    for (const cardName of cardList) {
      uniqueCards.set(
        cardName,
        (uniqueCards.get(cardName) ?? 0) + 1
      );
    }

    try {
      const cards = await fetchScryfallCardListByNames(uniqueCards);
      setCardData(cards);
    } catch (error) {
      setHasError(true);
      setErrorMessage(
        'Failed to fetch card data. Please try again later. Error: '
        + (error instanceof Error ? error.message : String(error))
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handlePrint = async (): Promise<void> => {
    const printArea = document.getElementById('print-area');
    if (!printArea) return;

    if (isMobile() || localStorage.getItem('TESTING_HTML2PDF') === 'true') {
      //convert to PDF and then open in new window
      try {
        setIsPdfMode(true);

        await html2pdf()
          .from(printArea)
          .set({
            margin: 0,
            filename:     'deck.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, allowTaint: true },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' },
          })
          .output('blob')
          .then((blob: Blob) => {
            const url = URL.createObjectURL(blob);
            window.open(url, '_blank');
          });
      } catch (err) {
        setHasError(true);
        setErrorMessage(`${err instanceof Error ? err.message : String(err)}`);
      } finally {
        setIsPdfMode(false);
      }
    } else {
      window.print();
    }
  };

  return (
    <PreviewContainerParent>
      <PreviewContainer>
        <p>{i18n.t(PAGES.MAIN.DESCRIPTION)}</p>
        <CardListInput
          cardList={cardList}
          onChange={setCardList}
        />
        <ActionButtonsContainer>
          <Button
            size={Size.M}
            onClick={() => void fetchCardData()}
            disabled={isLoading || cardList.length === 0 || readyToPrint}
          >
            {i18n.t(PAGES.MAIN.BUTTONS.GENERATE_PREVIEW)}
          </Button>
          <Button
            size={Size.M}
            onClick={() => void handlePrint()}
            disabled={!readyToPrint}
          >
            {i18n.t(PAGES.MAIN.BUTTONS.PRINT)}
            {/* eslint-disable-next-line */}
            {isPdfMode && <Ripple size='1em' borderWidth='2px'/>}
          </Button>
        </ActionButtonsContainer>
        {isLoading &&
          <Loader message={i18n.t(PAGES.MAIN.LOADERS.GENERATING_PREVIEW)} height='20vh'/>
        }
        {hasError && <div style={{ color: 'red' }}>{errorMessage}</div>}
        {!isLoading && pages.length > 0 && (
          <PrintArea id='print-area' ref={printAreaRef}>
            {pages.map((pageCards: Card[], pageIndex: number) => (
              <Page
                key={`page-${pageIndex}`}
                paper={{ width: 215.9, height: 279.4 }}
                card={{ width: 63, height: 88 }}
                pdfMode={isPdfMode}
                ref={pageIndex === pages.length - 1 ? lastPageRef : null}
              >
                {pageCards.map((card: Card, cardIndex: number) => (
                  <CardComponent
                    symbolLookup={symbolLookup}
                    key={`card-${pageIndex}-${cardIndex}`}
                    card={card}
                  />
                ))}
              </Page>
            ))}
          </PrintArea>
        )}
      </PreviewContainer>
    </PreviewContainerParent>
  );
};

export default CardListPDFGenerator;