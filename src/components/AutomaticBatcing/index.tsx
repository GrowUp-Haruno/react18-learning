import { FC } from 'react';
import { ShowComponent } from '../atoms/Layout';
import { AutoBatchEventHandler } from './AutoBatchEventHandler';
import { AutoBatchEventHandlerAsyncAwait } from './AutoBatchEventHandlerAsyncAwait';
import { AutoBatchFlushSync } from './AutoBatchFlushSync';
import { AutoBatchPromise } from './AutoBatchPromise';
import { AutoBatchSetTimeout } from './AutoBatchSetTimeout';
import { SwitchViewButton } from '../atoms/Button';
import { useDisclosure } from '../../commons/hooks/useDisclosure';

export const AutomaticBatcing: FC = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <div>
      <p>Automatic Batching</p>
      <SwitchViewButton isOpen={isOpen} onClick={onToggle} />
      <ShowComponent isOpen={isOpen}>
        <AutoBatchEventHandler />
        <AutoBatchSetTimeout />
        <AutoBatchPromise />
        <AutoBatchEventHandlerAsyncAwait />
        <AutoBatchFlushSync />
      </ShowComponent>
    </div>
  );
};
