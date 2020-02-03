it('loads', () => {

  cy
    .visit('localhost:3000');

  cy
    .screenshot();

  cy
    .log('heading is visible');
    
  cy
    .contains('h1', 'todos');

});
