it('starts with zero items', () => {

  cy
    .server();

  cy
    .route('GET', '/todos')
    .as('getTodoList');

  cy
    .visit('/');

  cy
    .wait('@getTodoList');

  cy
    .log('there are items in list');

  cy
    .get('li.todo')
    .should('have.length', 0);
  
});