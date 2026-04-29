import { SCRYFALL_BASE_URL } from './constants';

import { Card, BulkDataMetaResponse, BulkDataMeta, ScryfallCard } from 'app/types/external/scryfall/card';
import { CARDS_STORE, META_STORE, storagePromise } from 'app/utils/storage/indexeddb';

// eslint-disable-next-line i18next/no-literal-string
const DEFAULT_CARD_BULK_DATA_TYPE = 'oracle_cards';

/**
 * Get the metadata for the bulk card data we want (e.g. the defaults cards list)
 * @returns The metadata (file URI, type, etc)
 */
export const fetchMeta = async (): Promise<BulkDataMeta> => {
  // eslint-disable-next-line i18next/no-literal-string
  const response = await fetch(`${SCRYFALL_BASE_URL}/bulk-data`);
  // eslint-disable-next-line i18next/no-literal-string
  if (!response.ok) throw new Error('Bulk metadata fetch failed');

  const list = await response.json() as BulkDataMetaResponse;

  const desiredFileMeta = list.data.find(d => d.type === DEFAULT_CARD_BULK_DATA_TYPE);
  // eslint-disable-next-line i18next/no-literal-string
  if (!desiredFileMeta) throw new Error(`${DEFAULT_CARD_BULK_DATA_TYPE} bulk data not found`);

  return desiredFileMeta;
};

/**
 * Retrieves the bulk metadata, and stores in Indexed.db, which is the most performant choice for such a large amount
 * of frontend data that needs to be cached.
 */
export const downloadAndStoreBulkData = async (): Promise<void> => {
  const storage = await storagePromise;
  const meta = await fetchMeta();

  const storedUpdatedAt = await storage.get<string>(META_STORE, 'updated_at');
  if (storedUpdatedAt === meta.updated_at) return;

  const response = await fetch(meta.download_uri);
  // eslint-disable-next-line i18next/no-literal-string
  if (!response.ok) throw new Error(`Unable to retrieve ${meta.type} file from server`);

  const rawCards = await response.json() as ScryfallCard[];

  return new Promise((resolve, reject) => {
    const tx = storage.connection.transaction([CARDS_STORE, META_STORE], 'readwrite');
    const cardStore = tx.objectStore(CARDS_STORE);

    for (const raw of rawCards) {
      const card = {
        id: raw.id,
        common_name: raw.name,
        name: raw.name,
        layout: raw.layout,
        mana_cost: raw.mana_cost ?? '',
        type_line: raw.type_line ?? '',
        oracle_text: raw.oracle_text ?? '',
        power: raw.power,
        toughness: raw.toughness,
        loyalty: raw.loyalty,
        card_faces: raw.card_faces,
      } as Card;
      cardStore.put(card, card.common_name.toLowerCase());
    }

    tx.objectStore(META_STORE).put(meta.updated_at, 'updated_at');
    tx.oncomplete = (): void => resolve();
    tx.onerror = (): void => reject(tx.error ?? new Error());
  });
};

/**
 * Looks up the provided cards in the database, passing through the quantity to populate
 * in the Card response type
 * @param cards The map of cards and their respective quantities
 * @returns The list of cards, with updated quantities
 */
export const lookupCards = async (cards: Map<string, number>): Promise<Card[]> => {
  const storage = await storagePromise;
  const store = storage.connection.transaction([CARDS_STORE], 'readonly').objectStore(CARDS_STORE);

  const fetches = Array.from(cards, ([key, quantity]) =>
    new Promise<{ card: Card | null; key: string }>((resolve, reject) => {
      const normalizedKey = key.toLowerCase().replace(/\s\/\s/g, ' // ');
      const exact = store.get(normalizedKey);

      exact.onsuccess = (): void => {
        if (exact.result) {
          resolve({ card: { ...(exact.result as Card), quantity }, key });
          return;
        }

        const range = IDBKeyRange.bound(normalizedKey, normalizedKey + '\uffff');
        const prefix = store.getAll(range, 1);
        prefix.onsuccess = (): void => resolve({
          card: prefix.result[0] ? { ...(prefix.result[0] as Card), quantity } : null,
          key,
        });
        prefix.onerror = (): void => reject(prefix.error ?? new Error());
      };

      exact.onerror = (): void => reject(exact.error ?? new Error());

    })
  );

  const results = await Promise.all(fetches);
  const missing = results.filter(r => !r.card).map(r => r.key);
  // eslint-disable-next-line i18next/no-literal-string
  if (missing.length > 0) throw new Error(`Card(s) not found: ${missing.join(', ')}`);

  return results.map(r => r.card as Card);
};

export const checkDbPopulated = async (): Promise<boolean> => {
  const storage = await storagePromise;
  const updatedAt = await storage.get<string>(META_STORE, 'updated_at');
  return updatedAt !== null;
};
