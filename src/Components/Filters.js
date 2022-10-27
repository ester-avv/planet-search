import React, { useContext } from 'react';
import planetsContext from '../Context/PlanetsContext';

export default function Filters() {
  const { setNameFilter,
    handleClick,
    setColumn,
    setComparison,
    setAmount } = useContext(planetsContext);
  return (
    <form>
      <input
        type="text"
        onChange={ ({ target }) => { setNameFilter(target.value); } }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        onChange={ ({ target }) => { setColumn(target.value); } }
      >
        <option>
          population
        </option>
        <option>
          orbital_period
        </option>
        <option>
          diameter
        </option>
        <option>
          rotation_period
        </option>
        <option>
          surface_water
        </option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ ({ target }) => { setComparison(target.value); } }
      >
        <option>
          maior que
        </option>
        <option>
          menor que
        </option>
        <option>
          igual a
        </option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        name="habitants"
        onChange={ ({ target }) => { setAmount(target.value); } }
      />
      <button data-testid="button-filter" type="button" onClick={ handleClick }>
        Filtrar
      </button>
    </form>
  );
}
