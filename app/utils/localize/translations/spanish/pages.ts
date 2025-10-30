import { PAGES } from 'app/utils/localize/keys';

export default {
  [PAGES.FOOTER]: '© {{year}} Liz MacLean',
  [PAGES.NOT_FOUND.TITLE]: '¡Ups! Página no encontrada.',
  [PAGES.MAIN.DESCRIPTION]: (
    'Genera proxies simples de Magic: The Gathering para pruebas de juego. ¡Ahora con menos tinta!'
  ),
  [PAGES.MAIN.INPUT_ERROR]: (
    'Actualmente, el formato solo admite líneas que comiencen con una cantidad seguida del nombre de la carta.'
  ),
  [PAGES.MAIN.BUTTONS.GENERATE_PREVIEW]: 'Generar vista previa',
  [PAGES.MAIN.BUTTONS.PRINT_SAVE_PDF]: 'Imprimir / Guardar como PDF',
};
