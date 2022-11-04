import axios from 'axios';
import { pokeDataType, pokeDetailsType } from '../model/pokeApi';

export const pokemonGet = async () => {
  const pokemonDataResult = await axios.get<pokeDataType>(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200'
  );
  console.log(pokemonDataResult.data.results);

  return await Promise.all(
    pokemonDataResult.data.results.map(async (pokemonData) => {
      const result = await axios.get<pokeDetailsType>(pokemonData.url);
      return result.data;
    })
  );
};
