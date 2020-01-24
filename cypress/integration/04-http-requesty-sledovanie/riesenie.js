it('adds an item to the list', () => {

  cy
    .server();

  cy
    .route('POST', '/todos')
    .as('createTodoItem');

  cy
    .visit('localhost:3000');

  cy
    .get('.new-todo')
    .type('first item{enter}');

  cy
    .wait('@createTodoItem');
  
});