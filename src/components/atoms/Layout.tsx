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

type HStackProps = {
  children: ReactNode;
  width: string;
};
export const HStack: FC<HStackProps> = ({ width, ...props }) => (
  <div
    {...props}
    style={{ display: 'flex', width: width, border: '1px solid gray' }}
  />
);

type FlexGrowBoxProps = {
  children: ReactNode;
};
export const FlexGrowBox: FC<FlexGrowBoxProps> = ({ ...props }) => (
  <div
    {...props}
    style={{
      flexGrow: 1,
    }}
  />
);

type BoxProps = {
  children: ReactNode;
  height?: string;
  isPending?: boolean;
};
export const Box: FC<BoxProps> = ({ height, isPending = false, ...props }) => (
  <div
    {...props}
    style={{
      height: height,
      overflowY: 'scroll',
      border: '1px solid gray',
      opacity: isPending ? 0.5 : 1,
    }}
  />
);
