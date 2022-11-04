import { FC, useState } from 'react';
import { flushSync } from 'react-dom';
import { taskModel } from '../../commons/model/task';
import { Avater } from '../atoms/Avater';
import { SwitchViewButton } from '../atoms/Button';
import { TaskListUseDeferredValue } from './TaskListUseDeferredValue';

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

export const TaskUseDeferredvalue: FC = () => {
  const [taskList, setTaskList] = useState(tasks);
  const [selectAsign, setSelectAsign] = useState<'A' | 'B' | 'C' | null>(null);
  const [isView, setIsView] = useState(false);
  const onViewChange = () => {
    setIsView((prev) => !prev);
    setSelectAsign(null);
  };

  console.log('TaskUseDeferredvalue rendering');

  const onSelectAsign = (asign: 'A' | 'B' | 'C' | null) => {
    setSelectAsign(asign);
    setTaskList(tasks.filter((task) => !asign || task.asign === asign));
  };

  return (
    <div>
      <div style={{ marginTop: '8px' }}>
        <SwitchViewButton isView={isView} onClick={onViewChange} />
      </div>
      <div style={{ display: isView ? undefined : 'none', marginTop: '8px' }}>
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
        <TaskListUseDeferredValue taskList={taskList} />
      </div>
    </div>
  );
};
