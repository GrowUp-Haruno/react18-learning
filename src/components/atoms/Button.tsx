import { FC } from 'react';

type SwitchViewButtonProps = { isOpen: boolean; onClick: () => void };

export const SwitchViewButton: FC<SwitchViewButtonProps> = ({
  isOpen,
  onClick,
}) => {
  return <button onClick={onClick}>{isOpen ? '非表示' : '表示'}</button>;
};
