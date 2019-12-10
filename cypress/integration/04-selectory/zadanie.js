/// <reference types="cypress" />

const addItem = text => {

  cy
    .get('.new-todo')
    .type(`${text}{enter}`);

};

beforeEach(() => {

  cy
    .visit('/');

});

it('adds two items', () => {

  addItem('first item');
  addItem('second item');

  // doplň selector
  cy
    .get('...')
    .should('have.length', 2);
    
});
