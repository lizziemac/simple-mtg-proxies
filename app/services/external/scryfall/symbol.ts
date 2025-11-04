
import { api } from 'app/utils/api';
import {
  isSymbolScryfallResponse,
  SymbolMap
} from 'app/types/external/scryfall/symbol';
import { CachedItem } from 'app/types/cache';
import { CACHE_TTL } from 'app/common/constants';
// import { b64encode } from 'app/utils/helpers';

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

  const rawResponse = await api('https://api.scryfall.com', '/symbology');
  if (!isSymbolScryfallResponse(rawResponse)) {
    throw new Error();
  }
  const symbols = rawResponse.data;
  const symbolLookup: SymbolMap = Object.fromEntries(symbols.map(s => {
    return [
      s.symbol,
      // eslint-disable-next-line i18next/no-literal-string
      { ...s, name: `${s.symbol.replaceAll('/', '|').replaceAll(/[{}]/g, '')}` }];
  }));

  const cacheItem: CachedItem<SymbolMap> = {
    data: symbolLookup,
    last_updated_at: Date.now()
  };
  sessionStorage.setItem(key, JSON.stringify(cacheItem));

  return symbolLookup;
}


export async function getSymbolSVGs(svgUris: string[]): Promise<string[]> {
  const fetchPromises = svgUris.map(async (uri: string) => {
    // eslint-disable-next-line i18next/no-literal-string
    const key = `scryfall-symbols-b64:${uri}`;
    const cached: string | null = sessionStorage.getItem(key);
    if (cached) {
      const parsed: CachedItem<string> = JSON.parse(cached) as unknown as CachedItem<string>;
      if (Date.now() - parsed.last_updated_at < CACHE_TTL) {
        return parsed.data;
      }
    }

    const svgText = await fetch(uri).then(r => r.text());

    // eslint-disable-next-line i18next/no-literal-string
    return `data:image/svg+xml;base64,${Buffer.from(svgText, 'utf-8').toString('base64')}`;
  });
  return Promise.all(fetchPromises);
}