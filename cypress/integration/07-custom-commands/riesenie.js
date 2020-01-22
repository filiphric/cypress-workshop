Cypress.Commands.add('createTodo', todo => {
  
  cy
    .get('.new-todo')
    .type(`${todo}{enter}`);

});

beforeEach( () => {

  cy
    .request('POST', '/reset', {
      todos: []
    });
  
});

it('Creates 10 todos', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.new-todo');

  for (let index = 0; index < 10; index++) {

    cy
      .createTodo('todo ' + index);
      
  }

  cy
    .get('.todo')
    .should('have.length', 10);

});