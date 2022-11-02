import { FC, useEffect, useState } from 'react';

export const AutoBatchSetTimeout: FC = () => {
  const [count1, setCount1] = useState<number>(0);
  const [count2, setCount2] = useState<number>(0);
  const [now, setNow] = useState<Date>(new Date());

  console.log('AutoBatchSetTimeout is rendering');

  useEffect(() => {
    const timer = setTimeout(() => {
      setCount1((c) => c + 1);
      setCount2((c) => c + 1);
      // 最後に一度だけ再レンダリングする
      // React17ではsetCount1実行後に再レンダリング、setCount2実行後に再レンダリングしていた
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [now]);

  const onSetNow = () => {
    setCount1(0);
    setCount2(0);
    setNow(new Date());
    // 最後に一度だけ再レンダリングする
  };
  return (
    <div>
      <p>Automatic Batching（setTimeout）</p>
      <p>初回レンダリングまたはリセット押下1秒後にカウントが1になります。</p>
      <p>count1:{count1}</p>
      <p>count2:{count2}</p>
      <button onClick={onSetNow}>リセット</button>
    </div>
  );
};
