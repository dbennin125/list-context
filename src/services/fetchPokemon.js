import { perPage } from '../utils/ultils';

export const getAllPokemon = page => {
  // eslint-disable-next-line max-len
  return fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${page}&perPage=${perPage}&sort=pokemon&direction=asc`)
    .then(res => res.json())
    .then(({ results }) => results.map(
      ({ _id, pokemon, url_image }) => ({
        id: _id,
        name: pokemon, 
        image: url_image
      })))
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};


export const getPokemonTotalPages = () => {
  return fetch('https://pokedex-alchemy.herokuapp.com/api/pokedex')
    .then(res => res.json())
    .then(({ count, perPage }) => (
      Math.ceil(count / perPage)
    ))
    // eslint-disable-next-line no-console
    .catch(err => console.error(err));
}; 
  
