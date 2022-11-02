import { FC, useState } from 'react';
import { pokeDataType } from '../../commons/model/pokeApi';

export const AutoBatchPromise: FC = () => {
  console.log('AutoBatchPromise is rendering');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<pokeDataType | null>(null);

  // イベントハンドラとPromise内ではそれぞれで自動バッチが実行される
  const pokemonGet = () => {
    setIsLoading(true);
    // 完了後、再レンダリングする
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then((res) => res.json() as Promise<pokeDataType>)
      .then((data) => {
        setPokemons(data);
        setIsLoading(false);
        // 完了後、再レンダリングする
      });
  };

  return (
    <div>
      <p>Automatic Batching（Promise）</p>
      <p>ボタンを押すとデータを取得します</p>
      <button onClick={pokemonGet}>ゲットだぜ！</button>
      {isLoading ? (
        <p>Now Loading...</p>
      ) : (
        pokemons?.results.map((result) => (
          <p key={result.name}>{result.name}</p>
        ))
      )}
    </div>
  );
};
