import React, { useEffect, useState } from 'react';

/* fetchApi(){
    const url = 'https://swapi.dev/api/planets';
} */

function Table() {
  const [planetsList, setPlanetList] = useState([]);

  useEffect(() => {
    const getPlanets = async () => {
      const endpoint = 'https://swapi.dev/api/planets';
      const { results } = await fetch(endpoint).then((response) => response.json());
      const filteredData = results.filter((e) => e !== e.residents);
      setPlanetList(filteredData);
    };
    getPlanets();
  }, []);

  return (
    <div>
      <table border="1">
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            {/* <th>Residents</th> */}
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {
            planetsList.map((e) => (
              <tr key={ e.name }>
                <td>
                  {e.name}
                </td>
                <td>
                  { e.rotation_period }
                </td>
                <td>
                  { e.orbital_period }
                </td>
                <td>
                  { e.diameter }
                </td>
                <td>
                  { e.climate }
                </td>
                <td>
                  { e.gravity }
                </td>
                <td>
                  { e.terrain }
                </td>
                <td>
                  { e.surface_water }
                </td>
                <td>
                  { e.population }
                </td>
                <td>
                  { e.films }
                </td>
                <td>
                  { e.created }
                </td>
                <td>
                  { e.edited }
                </td>
                <td>
                  { e.url }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Table;
