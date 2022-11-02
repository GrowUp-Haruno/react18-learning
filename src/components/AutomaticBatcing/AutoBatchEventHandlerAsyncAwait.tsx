import { FC, useState } from 'react';
import { pokeDataType } from '../../commons/model/pokeApi';
import { Loading } from '../atoms/Loading';

export const AutoBatchEventHandlerAsyncAwait: FC = () => {
  console.log('AutoBatchEventHandlerAsyncAwait is rendering');

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [pokemons, setPokemons] = useState<pokeDataType | null>(null);

  const pokemonGetAsync = async () => {
    setIsLoading(true);
    setPokemons(null);
    const res = await fetch('https://pokeapi.co/api/v2/pokemon');
    const data = await (res.json() as Promise<pokeDataType>);
    setPokemons(data);
    setIsLoading(false);
  };

  return (
    <div>
      <p>Automatic Batching（async/await）</p>
      <p>ボタンを押すとデータを取得します</p>
      <button onClick={pokemonGetAsync}>ゲットだぜ！</button>
      {isLoading ? (
        <Loading />
      ) : (
        pokemons?.results.map((result) => (
          <p key={result.name}>{result.name}</p>
        ))
      )}
    </div>
  );
};
