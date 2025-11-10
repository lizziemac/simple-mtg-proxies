import i18n, { COMMON } from 'app/utils/localize';
import { ReactElement } from 'react';
import { Ripple } from 'app/common/components/Ripple';
import Loading from './styles';

interface LoaderProps {
  message?: string;
  height?: string;
}

const Loader = (props: LoaderProps): ReactElement => {
  return (
    <Loading height={props.height}>
      <Ripple />
      {props.message ?? i18n.t(COMMON.COMPONENTS.LOADER.MESSAGE)}
    </Loading>
  );
};

export default Loader;