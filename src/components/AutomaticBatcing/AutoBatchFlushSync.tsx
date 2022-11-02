import { FC, useState } from 'react';
import { flushSync } from 'react-dom';
import { pokeDataType } from '../../commons/model/pokeApi';

export const AutoBatchFlushSync: FC = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);

  console.log('AutoBatchFlushSync is rendering');

  const onCountUp = () => {
    // flushSyncのCallback内で定義すると自動バッチを分割できる
    flushSync(() => {
      setCount1((count1) => count1 + 1);
    });
    setCount2((count2) => count2 + 1);
  };

  return (
    <div>
      <p>Automatic Batching（flushSync）</p>
      <p>count1:{count1}</p>
      <p>count2:{count2}</p>
      <button onClick={onCountUp}>カウントアップ</button>
    </div>
  );
};
