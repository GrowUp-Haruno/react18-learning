import { FC, useEffect, useState } from 'react';
import { taskModel } from '../../commons/model/task';
import { Avater } from '../atoms/Avater';

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

export const TaskList: FC = () => {
  const [taskList, setTaskList] = useState(tasks);
  const [selectAsign, setSelectAsign] = useState<'A' | 'B' | 'C' | null>(null);
  const onSelectAsign = (asign: 'A' | 'B' | 'C' | null) => {
    setSelectAsign(asign);
    // setTaskList(tasks.filter((task) => !asign || task.asign === asign));
  };
  useEffect(() => {
    setTaskList(
      tasks.filter((task) => !selectAsign || task.asign === selectAsign)
    );
  }, [selectAsign]);

  return (
    <div>
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
      {taskList.map((task) => (
        <div
          key={task.id}
          style={{
            width: '300px',
            margin: 'auto',
            backgroundColor: 'lavender',
          }}
        >
          <p>タイトル: {task.title}</p>
          <p>担当者: {task.asign}</p>
        </div>
      ))}
    </div>
  );
};
