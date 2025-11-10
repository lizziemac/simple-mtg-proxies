import { ReactElement } from 'react';
import { StyledRipple } from './styles';

interface RippleProps {
  size?: string;
  borderWidth?: string;
}

export const Ripple = (props: RippleProps): ReactElement => {
  return (
    <StyledRipple {...props}>
      <div></div>
      <div></div>
      <div></div>
    </StyledRipple>
  );
};