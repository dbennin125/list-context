/* eslint-disable max-len */
import React, { createContext, useEffect, useState } from 'react';

import { getALlVillagers } from '../../services/fetchAnimalCrossing';
import { getAllAvatarCharacters } from '../../services/fetchAvatar';
import { getAllFuturamaCharacters } from '../../services/fetchFuturamaCharacters';
import { getAllHeyArnoldCharacters } from '../../services/fetchHeyArnold';
import { getAllPokemon } from '../../services/fetchPokemon';
import { getAllRickAndMortyCharacters } from '../../services/fetchRickAndMorty';


export const CharacterContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentApi, setCurrentApi] = useState('rickAndMorty');
  const [page, setPage] = useState(1);

  
  const apiMap = {
    'rickAndMorty': getAllRickAndMortyCharacters,
    'animalCrossing': getALlVillagers,
    'avatar': getAllAvatarCharacters,
    'heyArnold': getAllHeyArnoldCharacters,
    'futurama': getAllFuturamaCharacters,
    'pokemon': getAllPokemon,
  };

  useEffect(() => {
    apiMap[currentApi](page)
      .then(setCharacters)
      .finally(() => setLoading(false));
  }, [currentApi, page]);
  
  return (
    <CharacterContext.Provider value={{ 
      characters,
      setLoading, 
      loading, 
      currentApi, 
      setCurrentApi,
      apiMap,
      page,
      setPage,
    }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
