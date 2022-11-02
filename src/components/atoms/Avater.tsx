import { FC, MouseEventHandler, ReactChild, ReactNode } from 'react';

type AvaterProps = {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLDivElement>;
  isSelect?: boolean;
};

export const Avater: FC<AvaterProps> = ({ isSelect, ...props }) => {
  return (
    <div
      {...props}
      style={{
        width: '30px',
        height: '30px',
        border: '1px solid gray',
        borderRadius: '50%',
        textAlign: 'center',
        lineHeight: '30px',
        userSelect: 'none',
        margin: '0 16px',
        backgroundColor: isSelect ? 'greenyellow' : 'white',
      }}
    />
  );
};
