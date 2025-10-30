import { ReactElement } from 'react';
import LinkIcon from 'app/common/components/LinkIcon';

import i18n, { PAGES } from 'app/utils/localize';
import { Foot } from './styles';
import GitHubIcon from 'app/common/components/LinkIcon/GitHub';
import LinkedInIcon from 'app/common/components/LinkIcon/LinkedIn';
import ThemeToggle from 'app/common/components/ThemeToggle';

interface FooterProps {
  toggleTheme: () => void;
}

const Footer = (props: FooterProps): ReactElement => {
  const currentYear = new Date().getFullYear();
  return (
    <Foot>
      {i18n.t(PAGES.FOOTER, { replace: { year: currentYear }})}
      {/* eslint-disable i18next/no-literal-string */}
      <LinkIcon url="https://github.com/lizziemac">
        <GitHubIcon />
      </LinkIcon>
      <LinkIcon url="https://www.linkedin.com/in/lizzie-mac/">
        <LinkedInIcon />
      </LinkIcon>
      {/* eslint-enable i18next/no-literal-string */}
      <ThemeToggle handleToggle={(): void => props.toggleTheme()} />
    </Foot>
  );
};

export default Footer;