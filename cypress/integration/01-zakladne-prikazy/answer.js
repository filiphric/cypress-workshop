/// <reference types="cypress" />
// @ts-check
it('loads', () => {

  cy
    .visit('localhost:3000')

  cy
    .get('.new-todo')
    .get('footer')

  cy
    .contains('h1', 'todos')

  cy
    .contains('h1', /^todos$/)

  cy
    .contains('[data-cy=app-title]', 'todos')
    
})
