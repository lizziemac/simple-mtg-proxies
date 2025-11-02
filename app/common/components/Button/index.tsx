import { ReactElement, ReactNode } from 'react';
import { StyledButton } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode,
  iconPosition?: 'left' | 'right',
  children: ReactNode,
}

const Button = (props: ButtonProps): ReactElement => {
  return (
    <StyledButton {...props} >
      { props.icon }
      { props.children }
    </StyledButton>
  );
};

export default Button;