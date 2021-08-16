import { perPage } from '../utils/ultils';

export const getAllAvatarCharacters = page => {
  // eslint-disable-next-line max-len
  return fetch(`https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=${perPage}&page=${page}`)
    .then(res => res.json())
    .then(json => json.map(
      ({ _id, name, photoUrl }) => ({
        id: _id,
        name,
        image: photoUrl
      })))
  // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};

export const getAvatarTotalPages = () => {
  // eslint-disable-next-line max-len
  return fetch('https://last-airbender-api.herokuapp.com/api/v1/characters?perPage=1000')
    .then(res => res.json())
    .then(json => Math.ceil(json.length / perPage))
  // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};

