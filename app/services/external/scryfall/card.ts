import { api } from 'app/utils/api';
import { Card } from 'app/types/external/scryfall';

export async function fetchScryfallCardByName(cardName: string, quantity: number): Promise<Card> {
  const card = await api<Card>('https://api.scryfall.com', '/cards/named', {
    params: {
      exact: cardName,
    },
  });
  return { ...card, quantity };
}

export async function fetchScryfallCardListByNames(cardNames: Map<string, number>): Promise<Card[]> {
  const fetchPromises = Array.from(cardNames.entries()).map(
    ([name, quantity]) => fetchScryfallCardByName(name, quantity)
  );
  return Promise.all(fetchPromises);
}