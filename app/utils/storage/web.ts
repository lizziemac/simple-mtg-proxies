import { StorageProvider } from "app/types/storage";

class WebStorage implements StorageProvider {
  constructor(private storage: Storage) {} // Pass localStorage or sessionStorage

  async get<T>(key: string): Promise<T | null> {
    const cached: string | null = this.storage.getItem(key)

    if (cached) {
      return JSON.parse(cached) as T
    }

    return null
  }

  async set<T>(key: string, value: T): Promise<void> {
    this.storage.setItem(key, JSON.stringify(value))
  }

  async remove(key: string): Promise<void> {
    this.storage.removeItem(key)
  }

  async clear(): Promise<void> {
    this.storage.clear()
  }
}

// Creating the instances here - they'll be setup once and then re-used
export const localStore = new WebStorage(localStorage);
export const sessionStore = new WebStorage(sessionStorage);