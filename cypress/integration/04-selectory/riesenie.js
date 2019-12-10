/// <reference types="cypress" />
/// <reference types="@types/testing-library__cypress" />

beforeEach(() => {

  cy
    .visit('/');

});

it('selects element input field', () => {

  // pomocou devtools
  cy
    .get('body > section > header > input');

  // cez id
  cy
    .get('#new-todo');

  // cez classu
  cy
    .get('.new-todo');

  // pomocou testing library
  cy
    .findByPlaceholderText('What needs to be done?');
    
});

it('selects heading', () => {

  // cez data-cy atribút
  cy
    .get('[data-cy=app-title]');

  // cez text
  cy
    .contains('todos');

  // cez regulárny výraz (regex)
  cy
    .contains(/^todos$/);
  
});