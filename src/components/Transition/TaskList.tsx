import { FC } from 'react';
import { taskModel } from '../../commons/model/task';
type TaskListProps = {
  isPending: boolean;
  taskList: taskModel[];
};
export const TaskList: FC<TaskListProps> = ({ isPending, taskList }) => {
  return (
    <div
      style={{
        opacity: isPending ? 0.5 : 1,
      }}
    >
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
