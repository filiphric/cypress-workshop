/// <reference types="cypress" />
beforeEach(() => {

  cy
    .visit('localhost:3000');

});

it('loads', () => {

  cy
    .contains('h1', 'todos');

});

it('Has zero items', () => {

  cy
    .get('li.todo')
    .should('have.length', 0);

});

it('Adds two items', () => {

  cy
    .get('.new-todo')
    .type('first item{enter}');

  cy
    .contains('li.todo', 'first item')
    .should('be.visible');

  cy
    .get('.new-todo')
    .type('second item{enter}');

  cy
    .contains('li.todo', 'second item')
    .should('be.visible');

});

/**
 * Adds a todo item
 * @param {string} text
 */
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`);
};

it('Adds many items', () => {

  const N = 5;
  for (let k = 0; k < N; k += 1) {
    addItem(`item ${k}`);
  }
  // check number of items
  cy
    .get('li.todo')
    .should('have.length', 5);
  
});

it('Marks items as completed', () => {

  addItem('simple');

  cy
    .contains('li.todo', 'simple')
    .should('exist')
    .find('input[type="checkbox"]')
    .check();

  cy
    .contains('li.todo', 'simple')
    .find('.destroy')
    .click({ force: true });

  cy
    .contains('li.todo', 'simple')
    .should('not.exist');

});