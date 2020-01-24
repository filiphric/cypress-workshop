it('starts with zero items', () => {

  cy
    .visit('localhost:3000');

  cy
    .log('there are items in list');

  cy
    .get('li.todo')
    .should('have.length', 0);
  
});