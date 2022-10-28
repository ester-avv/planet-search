import React, { useMemo, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export default function Provider({ children }) {
  const [planetsList, setPlanetList] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState(planetsList);

  const [nameFilter, setNameFilter] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [amount, setAmount] = useState(0);

  const objWithFilters = {
    column,
    comparison,
    amount,
  };
  const [myFilters, setMyFilters] = useState(objWithFilters);

  //  const handleText = ({ target: value }) => {
  //    setNameFilter(value);
  //  };

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi.dev/api/planets';
      const { results } = await fetch(endpoint).then((response) => response.json());
      const filteredData = results.filter((e) => e !== e.residents);
      setPlanetList(filteredData);
    };
    getPlanets();
  }, []);

  useEffect(() => {
    const filterByName = () => {
      setFilteredPlanets(planetsList.filter((p) => p.name.includes(nameFilter)));
    };
    filterByName();
  }, [nameFilter, planetsList]);

  // Requisito 4 feito na mentoria com Joel e aluno Igor Arecippo

  const handleClick = useCallback(() => {
    const allFiltered = filteredPlanets.filter((p) => {
      switch (comparison) {
      case 'maior que':
        return Number(p[column]) > Number(amount);
      case 'menor que':
        return Number(p[column]) < Number(amount);
      default:
        return Number(p[column]) === Number(amount);
      }
    });
    setFilteredPlanets(allFiltered);
  }, [column, filteredPlanets, amount, comparison]);

  const context = useMemo(() => ({
    planetsList,
    setPlanetList,
    nameFilter,
    setNameFilter,
    filteredPlanets,
    setFilteredPlanets,
    column,
    setColumn,
    amount,
    setAmount,
    comparison,
    setComparison,
    handleClick,
    myFilters,
    setMyFilters,
  }), [
    planetsList,
    setPlanetList,
    nameFilter,
    setNameFilter,
    filteredPlanets,
    setFilteredPlanets,
    column,
    setColumn,
    amount,
    setAmount,
    comparison,
    setComparison,
    handleClick,
    myFilters,
    setMyFilters,
  ]);

  return (
    <PlanetsContext.Provider value={ context }>
      {children}
    </PlanetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes,
}.isRequired;
