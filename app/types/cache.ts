export interface CachedItem<T> {
  /**
   * The data to be cached/retrieved
   */
  data: T;
  /**
   * The timestamp at which the data was last updated, in seconds (e.g. directly from Date.now())
   */
  last_updated_at: number;
}