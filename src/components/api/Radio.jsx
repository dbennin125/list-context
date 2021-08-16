import React from 'react';
import { useApiMapList, useCurrentApi } from '../../hooks/useContextHook';

import { makeLabel } from '../../utils/ultils';

export const Radio = () => {
  const apiList = useApiMapList();
  const { setCurrentApi, currentApi } = useCurrentApi();

  return (
    apiList.map((item, i) => {
      const label = makeLabel(item);

      return <li  key={item + i}>
        <label 
          htmlFor={item}
        >
          {label}
        </label>
        <input
          id={item}
          type="radio"
          name="api"
          value={item}
          checked={currentApi === item}
          onChange={({ target }) => setCurrentApi(target.value)}
        />
      </li>;
    })
  );
};
