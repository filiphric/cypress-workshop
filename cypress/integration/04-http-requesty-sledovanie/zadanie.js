it('adds an item to the list', () => {

  cy
    .visit('localhost:3000');

  cy
    .get('.new-todo')
    .type('first item{enter}');
  
});