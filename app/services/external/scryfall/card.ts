import { CACHE_TTL } from 'app/common/constants';
import { api } from 'app/utils/api';
import { CachedItem } from 'app/types/cache';
import { Card } from 'app/types/external/scryfall/card';

export async function fetchScryfallCardByName(cardName: string, quantity: number): Promise<Card> {
  // eslint-disable-next-line i18next/no-literal-string
  const key = `scryfall-card:${cardName.toLowerCase()}`;
  const cached: string | null = sessionStorage.getItem(key);

  if (cached) {
    const parsed: CachedItem<Card> = JSON.parse(cached) as unknown as CachedItem<Card>;
    if (Date.now() - parsed.last_updated_at < CACHE_TTL) {
      return { ...parsed.data, quantity };
    }
  }

  const card: Card = await api('https://api.scryfall.com', '/cards/named', {
    params: {
      exact: cardName,
    },
  }) as Card;

  const cacheItem: CachedItem<Card> = {
    data: card,
    last_updated_at: Date.now()
  };
  sessionStorage.setItem(key, JSON.stringify(cacheItem));

  return { ...card, quantity };
}

export async function fetchScryfallCardListByNames(cardNames: Map<string, number>): Promise<Card[]> {
  const fetchPromises = Array.from(cardNames.entries()).map(
    ([name, quantity]) => fetchScryfallCardByName(name, quantity)
  );
  return Promise.all(fetchPromises);
}