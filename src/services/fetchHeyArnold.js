import { perPage } from '../utils/ultils';

export const getAllHeyArnoldCharacters = page => {
  // eslint-disable-next-line max-len
  return fetch(`https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${page}`)
    .then(res => res.json())
    .then(json => json.map(
      ({ _id, name, image }) => ({
        id: _id,
        name,
        image
      })))
  // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};

export const getHeyArnoldTotalPages = () => {
  // eslint-disable-next-line max-len
  return fetch('https://hey-arnold-api.herokuapp.com/api/v1/characters?perPage=1000')
    .then(res => res.json())
    .then(json => Math.ceil(json.length / perPage))
  // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};
