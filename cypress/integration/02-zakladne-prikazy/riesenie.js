/// <reference types="cypress" />
it('loads', () => {

  cy
    .visit('localhost:3000');

});

it('Has zero items', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('li.todo')
    .should('have.length', 0);

});

it('Adds two items', () => {

  cy
    .visit('localhost:3000');

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

it('Adds many items', () => {

  const addItem = text => {

    cy
      .get('.new-todo')
      .type(`${text}{enter}`);
  
  };

  cy
    .visit('localhost:3000');

  const N = 5;
  for (let k = 0; k < N; k += 1) {
    addItem(`item ${k}`);
  }
  // check number of items
  cy
    .get('li.todo')
    .should('have.length', 5);
  
});

it('Marks item as completed and deletes item', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.new-todo')
    .type('simple{enter}');

  cy
    .contains('simple')
    .should('exist');

  cy
    .get('input[type="checkbox"]')
    .check();

  cy
    .get('.destroy')
    .click({ force: true });

  cy
    .contains('simple')
    .should('not.exist');

});