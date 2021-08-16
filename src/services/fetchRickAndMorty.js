export const getAllRickAndMortyCharacters = page => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(({ results }) => results.map(
      ({ id, name, image }) => ({
        id, 
        name, 
        image
      })))
  // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};

export const getRickTotalPages = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(({ info }) => info.pages)
  // eslint-disable-next-line no-console
    .catch(err => console.error(err));
}; 
