import { useContext } from 'react';
import { 
  CharacterContext 
} from '../context/charactersProvider/CharacterProvider';
import { TotalPageContext } from '../context/pagesProvider/TotalPagesProvider';

export const useCharactersList = () => {
  const { characters } = useContext(CharacterContext);
  return characters;
}; 

export const useLoadingState = () => {
  const { loading, setLoading } = useContext(CharacterContext);
  return { loading, setLoading };
}; 

export const useCurrentApi = () => {
  const { currentApi, setCurrentApi } = useContext(CharacterContext);
  return {
    currentApi,
    setCurrentApi
  };
};

export const useApiMapList = () => {
  const { apiMap } = useContext(CharacterContext);
  const apiList = Object.keys(apiMap);
  return apiList;
};

export const usePage = () => {
  const { page, setPage } = useContext(CharacterContext);
  return {
    page, 
    setPage
  };
};
  
export const useTotalPages = () => {
  const { setTotalPages, totalPages } = useContext(TotalPageContext);
  return {
    setTotalPages,
    totalPages
  };
};
