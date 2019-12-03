/// <reference types="cypress" />
// @ts-check
it('loads', () => {

  cy
    .visit('localhost:3000')

  cy
    .get('.new-todo')
    .get('footer')

  cy
    .contains('h1', 'Todos App', {timeout: 10000})

  // cy.contains('h1', /.../)

})
