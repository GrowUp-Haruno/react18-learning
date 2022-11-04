import axios from 'axios';
import { pokeDataType, pokeDetailsType } from '../model/pokeApi';

export const pokemonGet = async (limit: number) => {
  const pokemonDataResult = await axios.get<pokeDataType>(
    `https://pokeapi.co/api/v2/pokemon/?offset=0&limit=${limit}`
  );

  return Promise.all(
    pokemonDataResult.data.results.map(async (pokemonData, i) => {
      return (await axios.get<pokeDetailsType>(pokemonData.url)).data;
    })
  );
};
