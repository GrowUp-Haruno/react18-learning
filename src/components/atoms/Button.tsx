import { FC, ReactNode } from 'react';

type SwitchViewButtonProps = { isOpen: boolean; onClick: () => void };

export const SwitchViewButton: FC<SwitchViewButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return <button onClick={onClick}>{isOpen ? '非表示' : '表示'}</button>;
};

export type ButtonProps = {
  isSelected: boolean;
  isPending: boolean;
  children: ReactNode;
  onClick: () => void;
};
export const Button: FC<ButtonProps> = ({
  isSelected,
  isPending,
  ...props
}) => (
  <button
    {...props}
    style={{
      opacity: isPending ? 0.5 : 1,
      backgroundColor: isSelected ? 'greenyellow' : 'white',
      border: 'none',
    }}
  />
);
