import React from 'react';
import PropTypes from 'prop-types';


export const CharacterItem = ({ name, image }) => (
  <>
    <figure>
      <figcaption>{name}</figcaption>
      <img style={{ height: '10rem' }} src={image} alt={name} />
    </figure>
  </>
);

CharacterItem.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
};
