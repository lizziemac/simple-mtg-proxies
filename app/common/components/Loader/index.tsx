import i18n, { COMMON } from 'app/utils/localize';
import { ReactElement } from 'react';
import Loading, { Ripple } from './styles';

interface LoaderProps {
  message?: string;
  height?: string;
}

const Loader = (props: LoaderProps): ReactElement => {
  return (
    <Loading height={props.height}>
      <Ripple>
        <div></div>
        <div></div>
        <div></div>
      </Ripple>
      {props.message ?? i18n.t(COMMON.COMPONENTS.LOADER.MESSAGE)}
    </Loading>
  );
};

export default Loader;