export const LocalStorageMock = ((): {
  clear: () => void,
  getItem: (key: string | number) => string | number | null,
  setItem: (key: string | number, value: string | number) => void,
  removeItem: (key: string | number) => void
} => {
  let store: {[x: string | number]: string | number} = {};
  return {
    clear(): void {
      store = {};
    },
    getItem(key: string | number): string | number | null {
      return store[key] || null;
    },
    setItem(key: string | number, value: string | number): void {
      store[key] = String(value);
    },
    removeItem(key: string | number): void {
      delete store[key];
    }
  };
})();
