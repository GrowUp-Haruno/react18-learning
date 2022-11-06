import { Button, ButtonProps } from '../atoms/Button';
import { HStack } from '../atoms/Layout';

type TabsProps<T extends string> = {
  isPending: boolean;
  toggleKey: T;
  onSlow: () => void;
  onFast: () => void;
};

export const Tabs = <T extends string>({
  isPending,
  toggleKey,
  onSlow,
  onFast,
}: TabsProps<T>) => {
  return (
    <HStack width="full">
      <Button
        isPending={isPending}
        isSelected={toggleKey === 'Fast'}
        onClick={onFast}
      >
        Fast
      </Button>
      <Button
        isPending={isPending}
        isSelected={toggleKey === 'Slow'}
        onClick={onSlow}
      >
        Slow
      </Button>
    </HStack>
  );
};
