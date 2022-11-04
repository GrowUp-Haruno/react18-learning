import { FC, useState, useTransition } from 'react';
import { useDisclosure } from '../../commons/hooks/useDisclosure';
import { taskModel } from '../../commons/model/task';
import { Avater } from '../atoms/Avater';
import { SwitchViewButton } from '../atoms/Button';
import { ShowComponent } from '../atoms/Layout';
import { TaskList } from './TaskList';

const user: {
  [x in number]: 'A' | 'B' | 'C';
} = {
  0: 'A',
  1: 'B',
  2: 'C',
};

const createDummyTask = () => {
  return [...Array(10000)].map<taskModel>((_, i) => ({
    id: i + 1,
    title: `タスク${i + 1}`,
    asign: user[i % 3],
  }));
};

const tasks = createDummyTask();

export const Task: FC = () => {
  const [isPending, startTransition] = useTransition();
  const [taskList, setTaskList] = useState(tasks);
  const [selectAsign, setSelectAsign] = useState<'A' | 'B' | 'C' | null>(null);
  const { isOpen, onToggle } = useDisclosure();

  console.log('TaskList rendering');

  const onSelectAsign = (asign: 'A' | 'B' | 'C' | null) => {
    // 緊急性の高い更新（urgent update）として処理される
    setSelectAsign(asign);
    // startTransitionで囲われた更新関数は、緊急性の高くない更新 (non-urgent update)として処理される
    startTransition(() => {
      setTaskList(tasks.filter((task) => !asign || task.asign === asign));
    });
  };

  return (
    <div>
      <div style={{ marginTop: '8px' }}>
        <SwitchViewButton isOpen={isOpen} onClick={onToggle} />
      </div>
      <ShowComponent isOpen={isOpen}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {[...Array(3)].map((_, i) => (
            <Avater
              key={user[i]}
              onClick={() => {
                onSelectAsign(user[i]);
              }}
              isSelect={user[i] === selectAsign}
            >
              {user[i]}
            </Avater>
          ))}
        </div>
        <div style={{ marginTop: '8px' }}>
          <button
            onClick={() => {
              onSelectAsign(null);
            }}
          >
            リセット
          </button>
        </div>
        <TaskList isPending={isPending} taskList={taskList} />
      </ShowComponent>
    </div>
  );
};
