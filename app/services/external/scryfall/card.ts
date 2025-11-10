import { CACHE_TTL_MS, MIN_BULK_API_DELAY_MS } from 'app/constants';
import { api } from 'app/utils/api';
import { CachedItem } from 'app/types/cache';
import { Card } from 'app/types/external/scryfall/card';
import { SCRYFALL_BASE_URL } from 'app/services/external/scryfall/constants';

const throttleCall = async (): Promise<void> => {
  const key = 'scryfall-cards-last-call';
  const cached: string | null = localStorage.getItem(key);

  if (cached) {
    const lastUpdatedAt: number = Number(cached);
    const wait: number = Date.now() - lastUpdatedAt;
    if (wait < MIN_BULK_API_DELAY_MS) {
      await new Promise(res => setTimeout(res, wait));
    }
  }
};

export const fetchScryfallCardByName = async (cardName: string, quantity: number): Promise<Card> => {
  // eslint-disable-next-line i18next/no-literal-string
  const key = `scryfall-card:${cardName.toLowerCase()}`;
  const cached: string | null = localStorage.getItem(key);

  if (cached) {
    const parsed: CachedItem<Card> = JSON.parse(cached) as unknown as CachedItem<Card>;
    if (Date.now() - parsed.last_updated_at < CACHE_TTL_MS) {
      return { ...parsed.data, quantity };
    }
  }

  const card: Card = await api(SCRYFALL_BASE_URL, '/cards/named', {
    params: {
      exact: cardName,
    },
  }) as Card;

  const cacheItem: CachedItem<Card> = {
    data: card,
    last_updated_at: Date.now()
  };
  localStorage.setItem(key, JSON.stringify(cacheItem));

  return { ...card, quantity };
};

export async function fetchScryfallCardListByNames(cardNames: Map<string, number>): Promise<Card[]> {
  await throttleCall();
  const fetchPromises = Array.from(cardNames.entries()).map(
    ([name, quantity]) => fetchScryfallCardByName(name, quantity)
  );
  return Promise.all(fetchPromises);
}