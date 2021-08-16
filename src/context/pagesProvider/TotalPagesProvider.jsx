import React, { createContext, useEffect, useState } from 'react';
import { useCurrentApi } from '../../hooks/useContextHook';
import { getACTotalPages } from '../../services/fetchAnimalCrossing';
import { getAvatarTotalPages } from '../../services/fetchAvatar';
import { getFuturamaTotalPages } from '../../services/fetchFuturamaCharacters';
import { getHeyArnoldTotalPages } from '../../services/fetchHeyArnold';
import { getPokemonTotalPages } from '../../services/fetchPokemon';
import { getRickTotalPages } from '../../services/fetchRickAndMorty';

export const TotalPageContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const TotalPageProvider = ({ children }) => {
  const { currentApi } = useCurrentApi();
  const [totalPages, setTotalPages] = useState(null);

  const apiTotalPagesMap = {
    'rickAndMorty': getRickTotalPages,
    'pokemon': getPokemonTotalPages,
    'avatar': getAvatarTotalPages,
    'heyArnold': getHeyArnoldTotalPages, 
    'animalCrossing': getACTotalPages,
    'futurama': getFuturamaTotalPages,
  };

  useEffect(() => {
    apiTotalPagesMap[currentApi]()
      .then(setTotalPages);
  }, [currentApi]);

  return (
    <TotalPageContext.Provider value={{
      totalPages, 
      setTotalPages
    }}
    >
      {children}
    </TotalPageContext.Provider>
  );
};
