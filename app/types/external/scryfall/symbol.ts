
export interface SymbolScryfallResponse {
  data: Symbol[]
}

export function isSymbolScryfallResponse(obj: unknown): obj is SymbolScryfallResponse {
  return (
    typeof obj === 'object' && obj !== null &&
    obj !== null &&
    'data' in obj &&
    Array.isArray((obj as { data: unknown }).data)
  );
}

export interface Symbol {
  /**
   * The plain text for the symbol (e.g. "{T}" for the Tap symbol)
   */
  symbol: string,
  /**
   * The URI for the SVG image
   */
  svg_uri: string,
  /**
   * The description of what the symbol means (e.g. "tap this permanent")
   */
  english: string,
}

export interface SymbolMap {
  [symbol: string]: Symbol
}