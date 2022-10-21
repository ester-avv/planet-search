import React from 'react';

/* fetchApi(){
    const url = 'https://swapi.dev/api/planets';
} */

function Table() {
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
          <h1>tabela</h1>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
