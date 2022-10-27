import React, { useContext } from 'react';
import planetsContext from '../Context/PlanetsContext';

export default function Filters() {
  const { setNameFilter } = useContext(planetsContext);
  return (
    <div>
      <input
        type="text"
        onChange={ ({ target }) => { setNameFilter(target.value); } }
        data-testid="name-filter"
      />
    </div>
  );
}
