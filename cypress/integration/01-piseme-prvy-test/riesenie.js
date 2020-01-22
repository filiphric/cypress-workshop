it('loads', () => {

  cy
    .visit('localhost:3000');

  cy
    .log('heading is visible');

  cy
    .contains('h1', 'todos');

  cy
    .contains('h1', /^todos$/);

  cy
    .contains('[data-cy=app-title]', 'todos');
    
});
