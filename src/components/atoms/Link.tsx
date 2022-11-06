import { FC, ReactNode } from 'react';

type LinkProps = {
  children: ReactNode;
  href?: string;
};

export const Link: FC<LinkProps> = ({ href = '#', ...props }) => (
  <a {...props} href={href} style={{ padding: '8px 16px',display:'block' }} />
);
