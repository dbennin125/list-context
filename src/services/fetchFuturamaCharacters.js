import { perPage } from '../utils/ultils';

export const getAllFuturamaCharacters = page => {
  // eslint-disable-next-line max-len
  return fetch(`https://futuramaapi.herokuapp.com/api/v2/characters?perPage=${perPage}&page=${page}`)
    .then(res => res.json())
    .then(json => json.map(
      ({ Name, PicUrl }) => 
        ({
          id: Name,
          name: Name,
          image: PicUrl
        })))
  // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};


export const getFuturamaTotalPages = () => {
  // eslint-disable-next-line max-len
  return fetch('https://futuramaapi.herokuapp.com/api/v2/characters?perPage=1000')
    .then(res => res.json())
    .then(json => Math.ceil(json.length / perPage))
  // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};
