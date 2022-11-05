import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useDisclosure } from '../../commons/hooks/useDisclosure';
import { pokemonGet } from '../../commons/utils/pokemonGet';
import { SwitchViewButton } from '../atoms/Button';
import { ShowComponent } from '../atoms/Layout';
import { Loading } from '../atoms/Loading';

export const BeforeReact18 = () => {
  const { isError, isLoading, data } = useQuery(
    ['pokemonGet-BeforeReact18'],
    () => pokemonGet(20)
  );
  const { isOpen, getToggleButtonProps } = useDisclosure();
  
  if (isError) return <p>BeforeReact18 ロード失敗</p>;
  if (isLoading) return <Loading />;
  
  return (
    <div style={{ marginTop: '8px' }}>
      <p>Before React18</p>
      <SwitchViewButton {...getToggleButtonProps()} />
      <ShowComponent isOpen={isOpen}>
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
      </ShowComponent>
    </div>
  );
};
