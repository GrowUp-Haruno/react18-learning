import { FC, useDeferredValue } from 'react';
import { taskModel } from '../../commons/model/task';
type TaskListProps = {
  taskList: taskModel[];
};
export const TaskListUseDeferredValue: FC<TaskListProps> = ({ taskList }) => {
  // ツリー内の緊急性の低い更新の再レンダーを遅延させることができる
  const deferredTaskList = useDeferredValue(taskList);

  return (
    <div>
      {deferredTaskList.map((task) => (
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
