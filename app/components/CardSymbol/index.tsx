import { ReactElement } from 'react';
import svgs from 'app/components/CardSymbol/svg';
import { StyledCardSymbol } from './styles';

interface CardSymbolProps {
  name: string,
}

const CardSymbol = (props: CardSymbolProps): ReactElement | null => {
  const Symbol = svgs[`${props.name}.svg`];
  return (
    Symbol ? <StyledCardSymbol as={Symbol}></StyledCardSymbol> : null
  );
};

export default CardSymbol;