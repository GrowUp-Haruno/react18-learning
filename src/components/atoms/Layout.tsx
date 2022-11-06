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
};
export const HStack: FC<HStackProps> = (props) => (
  <div
    {...props}
    style={{ display: 'flex', padding: '16px', width: '1000px' }}
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
};
export const Box: FC<BoxProps> = ({ height, ...props }) => (
  <div
    {...props}
    style={{
      height: height,
      overflowY: 'scroll',
      border: '1px solid gray',
    }}
  />
);
