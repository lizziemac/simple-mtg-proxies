import { ReactElement } from 'react';
import LinkIcon from 'app/common/components/LinkIcon';

import i18n, { PAGES } from 'app/utils/localize';
import { StyledFooter, StyledDisclaimer, StyledDisclaimerText } from './styles';
import GitHubIcon from 'app/common/components/LinkIcon/GitHub';
import LinkedInIcon from 'app/common/components/LinkIcon/LinkedIn';
import ThemeToggle from 'app/common/components/ThemeToggle';
import KoFiIcon from 'app/common/components/LinkIcon/KoFi';

interface FooterProps {
  toggleTheme: () => void;
}

const Footer = (props: FooterProps): ReactElement => {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <StyledFooter>
        {i18n.t(PAGES.FOOTER.COPYRIGHT, { replace: { year: currentYear }})}
        {/* eslint-disable i18next/no-literal-string */}
        <LinkIcon url="https://github.com/lizziemac">
          <GitHubIcon />
        </LinkIcon>
        <LinkIcon url="https://www.linkedin.com/in/lizzie-mac/">
          <LinkedInIcon />
        </LinkIcon>
        <LinkIcon url="https://www.ko-fi.com/lizziemac/">
          <KoFiIcon />
        </LinkIcon>
        {/* eslint-enable i18next/no-literal-string */}
        <ThemeToggle handleToggle={(): void => props.toggleTheme()} />
      </StyledFooter>
      <StyledDisclaimer>
        <StyledDisclaimerText>
          {i18n.t(PAGES.FOOTER.DISCLAIMER, { replace: { year: currentYear }})}
        </StyledDisclaimerText>
      </StyledDisclaimer>
    </>
  );
};

export default Footer;