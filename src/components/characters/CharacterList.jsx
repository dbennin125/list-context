import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { CharacterItem } from './CharacterItem';
import { useCharactersList } from '../../hooks/useContextHook';


export const CharacterList = () => {
  const characters = useCharactersList();
  const listElement = characters.map(item => (
    <li key={item.id}>
      <Link to={`/characters/${item.id}`}>
        <CharacterItem {...item} />
      </Link>
    </li> 
  )); 

  return (
    <ul>
      {listElement}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
  }))
};
