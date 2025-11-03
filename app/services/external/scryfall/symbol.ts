
import { api } from 'app/utils/api';
import {
  SymbolScryfallResponse,
  isSymbolScryfallResponse,
  SymbolMap
} from 'app/types/external/scryfall/symbol';
import { CachedItem } from 'app/types/cache';
import { CACHE_TTL } from 'app/common/constants';

export async function getSymbolLookup(): Promise<SymbolMap> {
  // eslint-disable-next-line i18next/no-literal-string
  const key = 'scryfall-symbols';
  const cached: string | null = sessionStorage.getItem(key);

  if (cached) {
    const parsed: CachedItem<SymbolMap> = JSON.parse(cached) as unknown as CachedItem<SymbolMap>;
    if (Date.now() - parsed.last_updated_at < CACHE_TTL) {
      return parsed.data;
    }
  }

  const rawResponse = await api('https://api.scryfall.com', '/symbology') as SymbolScryfallResponse;
  if (isSymbolScryfallResponse(rawResponse)) {
    const symbols = rawResponse.data;
    const symbolLookup: SymbolMap = Object.fromEntries(symbols.map(s => [s.symbol, s]));

    const cacheItem: CachedItem<SymbolMap> = {
      data: symbolLookup,
      last_updated_at: Date.now()
    };
    sessionStorage.setItem(key, JSON.stringify(cacheItem));

    return symbolLookup;
  } else {
    throw new Error();
  }

}