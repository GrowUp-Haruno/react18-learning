import { FC, ReactNode } from 'react';

type ShowComponentProps = {
  isOpen: boolean;
  children: ReactNode;
};
export const ShowComponent: FC<ShowComponentProps> = ({ isOpen, children }) => {
  return (
    <div
      children={children}
      style={{ display: isOpen ? undefined : 'none', marginTop: '8px' }}
    />
  );
};
