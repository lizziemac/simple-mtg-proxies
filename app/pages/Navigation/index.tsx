import { ReactElement } from 'react';

import ThemeToggle from 'app/common/components/ThemeToggle';
import { Nav, NavItem } from './styles';

interface NavigationProps {
  toggleTheme: () => void;
}

const Navigation = (props: NavigationProps): ReactElement => {
  return (
    <Nav>
      <NavItem
        as='div'><ThemeToggle handleToggle={(): void => props.toggleTheme()} /></NavItem>
    </Nav>
  );
};

export default Navigation;