import { useState, useTransition } from 'react';

export const useToggle = <T extends string>(initialState: T) => {
  const [toggleKey, setToggleKey] = useState<T>(initialState);
  const [isPending, startTransition] = useTransition();
  const onToggle = (key: T) => {
    startTransition(() => {
      setToggleKey(key);
    });
  };
  return { toggleKey, isPending, onToggle };
};
