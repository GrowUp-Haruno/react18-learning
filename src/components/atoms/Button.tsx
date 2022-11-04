import { FC } from 'react';

type SwitchViewButtonProps = { isView: boolean; onClick: () => void };

export const SwitchViewButton: FC<SwitchViewButtonProps> = ({
  isView,
  onClick,
}) => {
  return <button onClick={onClick}>{isView ? '非表示' : '表示'}</button>;
};
