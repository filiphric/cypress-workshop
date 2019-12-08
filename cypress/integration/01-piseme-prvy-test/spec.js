/// <reference types="cypress" />
// @ts-check
it('loads', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.new-todo');

  cy
    .get('footer');

  cy
    .contains('h1', 'Todos App');

});
