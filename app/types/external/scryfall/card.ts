/**
 * Types for Scryfall card data as used in this application.
 * See https://scryfall.com/docs/api/cards for full Scryfall API documentation.
 */
interface BaseCard {
  /**
   * Scryfall unique identifier for this card
   */
  id: string;
  /**
   * Number of copies of this card in the requested list
   */
  quantity?: number;
}

/**
 * Represents a single-sided Magic: The Gathering card as defined by Scryfall.
 */
export interface SingleSidedCard extends BaseCard {
  /**
   * Layout of the card as defined by Scryfall. The layouts below
   * are all single-sided card layouts, where the other side is just the MtG back.
   */
  layout: 'normal' | 'saga' | 'leveler';
  /**
   * Name of the card (e.g., "Black Lotus")
   */
  name: string;
  /**
   * Mana cost of the card (e.g., "{0}" for land cards, "{3}{U}{U}" for a spell that costs 3 generic and 2 blue mana)
   */
  mana_cost: string;
  /**
   * Type line of the card (e.g., "Creature — Elf Druid" or "Sorcery")
   */
  type_line: string;
  /**
   * Power of the card, if applicable (e.g., "3" for a 3/4 creature)
   */
  power?: string;
  /**
   * Toughness of the card, if applicable (e.g., "4" for a 3/4 creature)
   */
  toughness?: string;
  /**
   * Loyalty of the card, if applicable (e.g., "5" for a planeswalker)
   */
  loyalty?: string;
  /**
   * Oracle text of the card (the official rules text). This may include
   * special symbols represented in curly braces (e.g., "{T}" for tap symbol, "{W}" for white mana symbol, etc.)
   *
   * This text may include the special capabilities (like loyalty counters for planeswalkers, etc.)
   */
  oracle_text: string;
}

/**
 * Represents a double-sided Magic: The Gathering card as defined by Scryfall.
 */
export interface DoubleSidedCard extends BaseCard {
  /**
   * Layout of the card as defined by Scryfall. The layouts below
   * are all double-sided card layouts, where both sides have unique card data.
   */
  layout: 'transform' | 'split' | 'adventure' | 'modal_dfc';
  /**
   * Array of card faces for the double-sided card. Each face contains its own
   * set of properties similar to SingleSidedCard.
   */
  card_faces: SingleSidedCard[];
}

/**
 * A Magic: The Gathering card, with only the information needed for this application.
 */
export type Card = SingleSidedCard | DoubleSidedCard;

/**
 * Informs the caller whether the provided card is a double-sided card or not
 * @param card The card to check
 * @returns True if the card is a double-sided card, false otherwise
 */
export function isDoubleSidedCard(card: Card): card is DoubleSidedCard {
  return 'card_faces' in card;
}

// | Layout                         | Needs Special Printing? | Reason                                |
// | ------------------------------ | ----------------------- | ------------------------------------- |
// | `normal`                       | No                      | Standard one-face layout              |
// | `transform`, `modal_dfc`       | No                      | Print each face separately            |
// | `split`                        | **Yes**                 | Two halves side-by-side or top/bottom |
// | `adventure`                    | **Yes**                 | Spell + creature in one card          |
// | `saga`                         | Mild                    | Preserve multiline text               |
// | `leveler`                      | Mild                    | Preserve preformatted text            |
// | `meld`                         | Mild                    | Print each piece separately           |
// | `aftermath`                    | **Yes**                 | Stacked halves, bottom rotated        |
// | `battle`, `prototype`, `token` | No / Formatting only    | Normal card proportions               |
