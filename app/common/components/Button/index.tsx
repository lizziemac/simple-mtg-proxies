import { ReactElement, ReactNode } from 'react';
import { StyledButton } from './styles';
import { Size } from 'app/constants';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: Size,
  iconOnly?: boolean,
  children: ReactNode,
}

const Button = (props: ButtonProps): ReactElement => {
  return (
    <StyledButton {...props} >
      { props.children }
    </StyledButton>
  );
};

export default Button;