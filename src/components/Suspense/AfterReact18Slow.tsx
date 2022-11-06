import { useQuery } from '@tanstack/react-query';
import { pokemonGet } from '../../commons/utils/pokemonGet';
import { Box } from '../atoms/Layout';
import { FetchSuspense } from '../atoms/System';

export const AfterReact18Slow = () => {
  const { data } = useQuery(['pokemonGet-AfterReact18Slow'], () =>
    pokemonGet(1000)
  );
  return (
    <Box height="300px">
      <p>After React18 SlowFetch</p>
      {data?.map((pokemon) => (
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
    </Box>
  );
};
