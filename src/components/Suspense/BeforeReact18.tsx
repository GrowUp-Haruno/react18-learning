import { useQuery } from '@tanstack/react-query';
import { pokemonGet } from '../../commons/utils/pokemonGet';
import { Loading } from '../atoms/Loading';

export const BeforeReact18 = () => {
  const { isError, isLoading, data } = useQuery(['pokemonGet'], pokemonGet);
  if (isError) return <p>BeforeReact18 ロード失敗</p>;
  if (isLoading) return <Loading />;
  return (
    <div>
      <p>Before React18</p>
      {data.map((pokemon) => (
        <div
          key={pokemon.id}
          style={{
            width: '300px',
            margin: 'auto',
            backgroundColor: 'lavender',
          }}
        >
          <p>名前: {pokemon.name}</p>
          <p>タイプ: {pokemon.types[0].type.name}</p>
        </div>
      ))}
    </div>
  );
};
