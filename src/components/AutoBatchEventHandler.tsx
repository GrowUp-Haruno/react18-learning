import { FC, useState } from 'react';

export const AutoBatchEventHandler: FC = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  console.log('AutoBatchEventHandler is rendering');

  // 下記のイベントハンドラが完了した時点で再レンダリングが発生する
  const onCountUp = () => {
    setCount1((count1) => count1 + 1);
    setCount2((count2) => count2 + 1);
  };

  return (
    <div>
      <p>Automatic Batching（Event handler）</p>
      <p>count1:{count1}</p>
      <p>count2:{count2}</p>
      <button onClick={onCountUp}>カウントアップ</button>
    </div>
  );
};
