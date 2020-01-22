it('starts with zero items', () => {

  cy
    .visit('/');

  cy
    .log('there are items in list');

  cy
    .get('li.todo')
    .should('have.length', 0);
  
});