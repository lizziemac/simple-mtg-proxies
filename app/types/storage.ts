
/**
 * Interface to be used with LocalStorage, SessionStorage, and IndexedDB
 */
export interface StorageProvider {
  /**
   * Get the value for a specified key
   * @param key The key to get the value for
   */
  get<T>(key: string): Promise<T | null>;

  /**
   * Set or update the value for a specified key
   * @param key The key to set the value for
   */
  set<T>(key: string, value: T): Promise<void>;

  /**
   * Remove a key-value pair
   * @param key The key to remove the pair for
   */
  remove(key: string): Promise<void>;
  
  /**
   * Clear the storage
   */
  clear(): Promise<void>;
}