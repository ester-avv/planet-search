import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import testData from "../../cypress/mocks/testData";import userEvent from "@testing-library/user-event";
import AppProvider from '../Context/Provider'

function renderWithContext(children) {
  return(
    render(
      <AppProvider>
        { children }
      </AppProvider>
    )
  )
}

/* test('I am your test', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello, App!/i);
  expect(linkElement).toBeInTheDocument();
}); */

describe('Verifica a requisição da API', () => {
it('Testando a requisição feita no início da aplicação', async () => {
  global.fetch = global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(testData),
  })
  await act( async () => {
    renderWithContext(<App />);
  })
  const table = screen.getByRole('table')
  expect(table).toBeInTheDocument();

  const planet = screen.getByText('Tatooine')
  expect (planet).toBeInTheDocument();

  /* const columns = screen.findAllByRole('td');
  expect(columns[0]).toBeInTheDocument(); */

});
it('Verifica filtros e tabela', async () => {
  global.fetch = global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue(testData),
  })
  await act( async () => {
    renderWithContext(<App />);
  })
  const filterByColumn = screen.getByTestId('column-filter');
    const filterByComparison = screen.getByTestId('comparison-filter');
    const filterByAmount = screen.getByTestId('value-filter');
    const btnToFilter = screen.getByTestId('button-filter');
    const filterByName = screen.getByTestId('name-filter');

    expect(filterByColumn).toBeInTheDocument();
    expect(filterByComparison).toBeInTheDocument();
    expect(filterByAmount).toBeInTheDocument();
    expect(btnToFilter).toBeInTheDocument();

    userEvent.type(filterByName, 'oo');
    userEvent.selectOptions(filterByColumn,['rotation_period']);
    userEvent.selectOptions(filterByComparison,['maior que']);
    userEvent.type(filterByAmount, '20');

    userEvent.click(btnToFilter);

    const planetT = screen.getByText('Tatooine');
    expect(planetT).toBeInTheDocument();

    const planetN = screen.getByText('Naboo');
    expect(planetN).toBeInTheDocument();

    userEvent.selectOptions(filterByColumn,['orbital_period']);
    userEvent.selectOptions(filterByComparison,['menor que']);
    userEvent.type(filterByAmount, '305');
    userEvent.click(btnToFilter);

    expect(planetT).toBeInTheDocument();
  


})
})
