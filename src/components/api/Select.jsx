import React from 'react';
import { makeLabel, sortArray } from '../../utils/ultils';
import { 
  useApiMapList, 
  useCurrentApi, 
  useLoadingState, 
  usePage, 
  useTotalPages  
} 
  from '../../hooks/useContextHook';

export const Select = () => {
  const apiList = useApiMapList();
  const { currentApi, setCurrentApi } = useCurrentApi();
  const { setPage } = usePage();
  const { setTotalPages } = useTotalPages();
  const { setLoading } = useLoadingState();

  const sortedList = sortArray(apiList);

  const handleNewAPIChange = ({ target }) => {
    setPage(1);
    setTotalPages(null);
    setLoading(true);
    setCurrentApi(target.value);
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'column', 
      padding: '2rem' 
    }}
    >
      <label  forhtml="api-select">Choose an API</label>
      <select 
        style={{ margin: '1rem' }}
        name="api"
        id="api-select"
        value={currentApi}
        onChange={handleNewAPIChange}
      >
        {
          sortedList.map(
            api => {
              const label = makeLabel(api);
              return <option 
                key={api} 
                value={api} 
              >
                {label}
              </option>;
            }
          )
        }
      </select>
    </div>
  );
};
