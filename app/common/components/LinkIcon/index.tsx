import { ReactElement } from 'node_modules/@types/react';

export * from './styles';

interface LinkIconProps {
  url?: string;
  children?: React.ReactNode;
}

const LinkIcon = (
  { url, children }: LinkIconProps
): ReactElement => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ lineHeight: 0 }}
    >
      {children}
    </a>
  );
};

export default LinkIcon;