import { FC, useEffect, useState, startTransition } from 'react';
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
