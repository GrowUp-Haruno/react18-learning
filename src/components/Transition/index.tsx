import { FC } from 'react';
import { useDisclosure } from '../../commons/hooks/useDisclosure';
import { SwitchViewButton } from '../atoms/Button';
import { ShowComponent } from '../atoms/Layout';
import { Task } from './Task';
import { TaskUseDeferredvalue } from './TaskUseDeferredvalue';

export const Transition: FC = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <div>
      <p>Transition</p>
      <SwitchViewButton isOpen={isOpen} onClick={onToggle} />
      <ShowComponent isOpen={isOpen}>
        <p>Transition（useTransition）</p>
        <Task />
        <p>Transition（useDeferredValue）</p>
        <TaskUseDeferredvalue />
      </ShowComponent>
    </div>
  );
};
