import React, { useContext } from 'react';
import planetsContext from '../Context/PlanetsContext';

export default function Filters() {
  const { setNameFilter,
    handleClick,
    setColumn,
    setComparison,
    setAmount,
    myFilters,
    amount } = useContext(planetsContext);

  /* amount = 0; */
  /* console.log(myFilters); */
  return (
    <div>
      <span>
        {/*         {myFilters.map((e) => (
          <div key={ e.column + e.amount }>
            <p>
              { e.column }
            </p>
            <p>
              { e.comparison }
            </p>
            <p>
              { e.amount }
            </p>
            <button type="button">
              Erase
            </button>
          </div>
        ))} */}
      </span>
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
          {
            myFilters.map((f) => (
              <option key={ `comparison${f}` }>
                {f}
              </option>
            ))
          }
          {/* <option>
            { myFilters[0] }
          </option>
          <option>
            { myFilters[1] }
          </option>
          <option>
            { myFilters[2] }
          </option>
          <option>
            { myFilters[3] }
          </option>
          <option>
            { myFilters[4] }
          </option> */}
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
          value={ amount }
          onChange={ ({ target }) => { setAmount(target.value); } }
        />
        <button data-testid="button-filter" type="button" onClick={ handleClick }>
          Filtrar
        </button>
      </form>
    </div>
  );
}
