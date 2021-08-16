import { perPage } from '../utils/ultils';

/* eslint-disable max-len */
export const getALlVillagers = (page) => {
  return fetch(`https://ac-vill.herokuapp.com/villagers?page=${page}&perPage=${perPage}`)
    .then(res => res.json())
    .then(res => res.map(
      ({ _id, name, image }) => ({
        id: _id,
        name, 
        image
      })))
  // eslint-disable-next-line no-console
    .catch(err => console.error(err));
};

export const getACTotalPages = () => {
  // eslint-disable-next-line max-len
  return fetch('https://ac-vill.herokuapp.com/villagers?perPage=1000')
    .then(res => res.json())
    .then(json => Math.ceil(json.length / perPage))
  // eslint-disable-next-line no-console
    .catch(err => console.log(err));
};
