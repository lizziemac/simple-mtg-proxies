import { ReactElement } from 'react';
import i18n, { PAGES } from 'app/utils/localize';

const NotFound = (): ReactElement => {
  return (
    <div>
      <h1>{i18n.t(PAGES.NOT_FOUND.TITLE)}</h1>
    </div>
  );
};

export default NotFound;