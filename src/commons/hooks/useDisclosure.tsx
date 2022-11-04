import { useCallback, useState } from 'react';

export type ToggleButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export const useDisclosure = (isOpenDefault = false) => {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  const onOpen = useCallback(() => {
    setIsOpen(true);
  }, []);
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);
  const onToggle = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);
  const getToggleButtonProps = useCallback(
    (): ToggleButtonProps => ({
      isOpen: isOpen,
      onClick: onToggle,
    }),
    [isOpen]
  );

  return { isOpen, onOpen, onClose, onToggle, getToggleButtonProps };
};
