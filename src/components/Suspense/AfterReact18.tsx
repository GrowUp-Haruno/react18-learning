import { useQuery } from '@tanstack/react-query';
import { pokemonGet } from '../../commons/utils/pokemonGet';
import { Box } from '../atoms/Layout';

export const AfterReact18 = () => {
  const { data } = useQuery(['pokemonGet-AfterReact18'], () => pokemonGet(151));
  return (
    <Box height="300px">
      <p>After React18</p>
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
