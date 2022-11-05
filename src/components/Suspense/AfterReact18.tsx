import { useQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { useDisclosure } from '../../commons/hooks/useDisclosure';
import { pokemonGet } from '../../commons/utils/pokemonGet';
import { SwitchViewButton } from '../atoms/Button';
import { ShowComponent } from '../atoms/Layout';
import { Loading } from '../atoms/Loading';

export const AfterReact18 = () => {
  const { isError, isLoading, data } = useQuery(
    ['pokemonGet-AfterReact18'],
    () => pokemonGet(151)
  );
  const { isOpen, getToggleButtonProps } = useDisclosure(true);
  // if (isError) return <p>BeforeReact18 ロード失敗</p>;
  // if (isLoading) return <Loading />;
  return (
    <div style={{ marginTop: '8px' }}>
      <p>After React18</p>
      <SwitchViewButton {...getToggleButtonProps()} />
      <ShowComponent isOpen={isOpen}>
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
      </ShowComponent>
    </div>
  );
};
