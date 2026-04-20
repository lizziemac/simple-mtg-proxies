
class IndexedDBStorage {
  private static readonly DB_NAME = 'simple-mtg-proxies';
  connection: IDBDatabase;

  /**
   * Private constructor. You need to start the IndexedDB connection with IndexedDBStorage.create()
   * @param connection
   */
  private constructor(connection: IDBDatabase) {
    this.connection = connection;
  }

  /**
   * Uses an app-wide database, and gets or creates it, with the provided store/table names.
   *
   * @param storeNames The list of stores to create (e.g. cards, userData, etc)
   * @param dbVersion The version of the database, defaults to 1. Used to determine if new tables need to be added.
   * @returns
   */
  static async create(storeNames: string[], dbVersion: number = 1): Promise<IndexedDBStorage> {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.DB_NAME, dbVersion);

      request.onupgradeneeded = (e): void => {
        const db = (e.target as IDBOpenDBRequest).result;
        for (const store of storeNames) {
          if (!db.objectStoreNames.contains(store)) {
            db.createObjectStore(store);
          }
        }
      };

      request.onsuccess = (): void => resolve(new IndexedDBStorage(request.result));
      request.onerror = (): void => reject(request.error ?? new Error());
    });
  }

  /**
   * Gets the needed value from the store
   * @param store The store
   * @param key The key
   * @returns The data, or null
   */
  async get<T>(storeName: string, key: string): Promise<T | null> {
    return new Promise<T | null>((resolve, reject) => {
      const tx = this.connection.transaction(storeName, 'readonly');
      const req = tx.objectStore(storeName).get(key.toLowerCase());
      req.onsuccess = (): void => resolve(req.result as T | null);
      req.onerror = (): void => reject(req.error ?? new Error());
    });
  }

  async set<T>(storeName: string, key: string, value: T): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const tx = this.connection.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.put(value, key.toLowerCase());
      tx.oncomplete = (): void => resolve();
      tx.onerror = (): void => reject(tx.error ?? new Error());
    });
  }

  async remove(storeName: string, key: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const tx = this.connection.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.delete(key);
      tx.oncomplete = (): void => resolve();
      tx.onerror = (): void => reject(tx.error ?? new Error());
    });
  }

  async clear(storeName: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const tx = this.connection.transaction(storeName, 'readwrite');
      const store = tx.objectStore(storeName);
      store.clear();
      tx.oncomplete = (): void => resolve();
      tx.onerror = (): void => reject(tx.error ?? new Error());
    });
  }
}

export const META_STORE = 'meta';
export const CARDS_STORE = 'cards';
const INDEXED_DB_VERSION = 1; // Only update if you add a new store
// Await when using elsewhere, to ensure the DB is setup before use
export const storagePromise = IndexedDBStorage.create([META_STORE, CARDS_STORE], INDEXED_DB_VERSION);
