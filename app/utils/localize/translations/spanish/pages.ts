import { PAGES } from 'app/utils/localize/keys';

export default {
  [PAGES.FOOTER.COPYRIGHT]: '© {{year}} Liz MacLean',
  [PAGES.FOOTER.DISCLAIMER]: (
    'Este proyecto no está afiliado con Wizards of the Coast. '
    + 'Todos los recursos relacionados con "Magic: the Gathering" son propiedad de Wizards of the Coast, y su uso aquí '
    + 'no implica un respaldo de Wizards of the Coast hacia este proyecto. '
    + 'Este proyecto se ha realizado bajo el supuesto de que respeta las políticas de contenido de fans y de proxies '
    + 'distribuidas por Wizards of the Coast. '
    + 'Estas proxies no pueden utilizarse como sustitutos de cartas reales de Magic en torneos sancionados, y podrían '
    + 'no ser aceptadas en tu tienda local o grupo de juego. '
    + 'Las proxies generadas en este sitio web son responsabilidad exclusiva de quienes decidan usarlas. '
    + 'Los datos de las cartas provienen de Scryfall. El uso de esos datos aquí no implica un respaldo de este '
    + 'proyecto por parte de Scryfall ni de Wizards of the Coast.'
  ),
  [PAGES.NOT_FOUND.TITLE]: '¡Ups! Página no encontrada.',
  [PAGES.MAIN.DESCRIPTION]: (
    'Genera proxies simples de Magic: The Gathering para pruebas de juego'
  ),
  [PAGES.MAIN.INPUT_ERROR]: (
    'Actualmente, el formato solo admite líneas que comiencen con una cantidad seguida del nombre de la carta.'
  ),
  [PAGES.MAIN.BUTTONS.GENERATE_PREVIEW]: 'Previa',
  [PAGES.MAIN.BUTTONS.PRINT]: 'Imprimir',
};
