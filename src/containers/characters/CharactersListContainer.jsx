import React from 'react';
import { Select } from '../../components/api/Select';
import { CharacterList } from '../../components/characters/CharacterList';
import { Loading } from '../../components/loading/Loading';
import { Paging } from '../../components/paging/Paging';
import { useLoadingState } from '../../hooks/useContextHook';


export const CharactersListContainer = () => {
  const { loading } = useLoadingState();
  return (
    loading 
      ?
      <main> 
        <Select/>
        <Paging/>
        <Loading /> 
      </main>
      : 
      <main>
        <Select/>
        <Paging />
        <CharacterList />
      </main>
  );
};
