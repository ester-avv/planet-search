import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';

export default function Provider({ children }) {
  const [planetsList, setPlanetList] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filteredPlanets, setFilteredPlanets] = useState(planetsList);

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

  const context = useMemo(() => ({
    planetsList,
    setPlanetList,
    nameFilter,
    setNameFilter,
    filteredPlanets,
    setFilteredPlanets,
  }), [
    planetsList,
    setPlanetList,
    nameFilter,
    setNameFilter,
    filteredPlanets,
    setFilteredPlanets,
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
