import { PAGES } from 'app/utils/localize/keys';

export default {
  [PAGES.FOOTER.SYNC_DB_HINT]: 'Missing cards?',
  [PAGES.FOOTER.SYNC_DB]: 'Sync Card Database',
  [PAGES.FOOTER.SYNC_DB_SYNCING]: 'Syncing...',
  [PAGES.FOOTER.SYNC_DB_SUCCESS]: 'Database synced',
  [PAGES.FOOTER.SYNC_DB_ERROR]: 'Sync failed',
  [PAGES.FOOTER.COPYRIGHT]: '© {{year}} Liz MacLean',
  [PAGES.FOOTER.DISCLAIMER]: (
    'This project is not affliated with Wizards of the Coast. '
    + 'All "Magic: the Gathering" related assets are copyright Wizards of the Coast and the use of them here is not an '
    + 'endorsement from Wizards of the Coast of this project. '
    + 'This project has been conducted under the assumption that it respects the proxy and fan content policies '
    + 'distributed by Wizards of the Coast.'
    + 'These proxies cannot be used to substitute real Magic cards in sanctioned tournaments, and might not be welcome '
    + 'in your LGS or playgroup. '
    + 'Proxies generated at this website are the sole responsibility of those who intend to use them. '
    + 'Card data has been pulled from Scryfall. The use of that data here is not an endorsement of this project from '
    + 'Scryfall or Wizards of the Coast.'
  ),
  [PAGES.NOT_FOUND.TITLE]: 'Oops! Page not found!',
  [PAGES.MAIN.TITLE]: 'Simple MtG Proxies',
  [PAGES.MAIN.DESCRIPTION]: (
    'Generate simple Magic: The Gathering proxies for playtesting. Set codes and collector numbers are ignored — '
    + 'all prints of a card will resolve to the same proxy.'
  ),
  [PAGES.MAIN.INPUT_ERROR]: 'Format currently only supports lines starting with a quantity followed by the card name.',
  [PAGES.MAIN.INPUT_LENGTH_ERROR]: 'Please only enter less than 120 unique cards at a time.',
  [PAGES.MAIN.BUTTONS.GENERATE_PREVIEW]: 'Preview',
  [PAGES.MAIN.BUTTONS.PRINT]: 'Print',
  [PAGES.MAIN.BUTTONS.PASTE]: 'Paste',
  [PAGES.MAIN.BUTTONS.ENTER_MANUALLY]: 'Enter manually',
  [PAGES.MAIN.BUTTONS.CLEAR]: 'Clear',
  [PAGES.MAIN.BUTTONS.EDIT_CARD_LIST]: 'Edit card list',
  [PAGES.MAIN.LOADERS.GENERATING_PREVIEW]: 'Generating preview...',
  [PAGES.MAIN.LOADERS.SYNCING_DATABASE]: 'Syncing card database...'
};