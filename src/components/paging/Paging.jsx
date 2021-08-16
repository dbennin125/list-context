import React from 'react';

import { 
  useCharactersList, 
  usePage, 
  useTotalPages 
} 
  from '../../hooks/useContextHook';
import { perPage } from '../../utils/ultils';
import { PaginationLoading } from '../loading/PaginationLoading';

export const Paging = () => {
  const apiList = useCharactersList();
  const { page, setPage } = usePage();
  const { totalPages } = useTotalPages();
 
  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      flexDirection: 'row',
      maxHeight: '20vh'
    }}
    > 
      {
        totalPages 
          ?
          <>
            <button 
              disabled={page === 1} 
              name="previous" 
              onClick={() => setPage(prev => prev - 1)}
            >
          &lt;
            </button>
            <p style={{ textAlign: 'center', width: '10rem' }}>
              Page {page} of {totalPages}
            </p>
            <button 
              disabled={(totalPages === page) || (apiList?.length < perPage) } 
              name="next" 
              onClick={() => setPage(prev => prev + 1)}
            >
          &gt;
            </button>
          </> 
          : <PaginationLoading />
      }
    </div>
  );
};
