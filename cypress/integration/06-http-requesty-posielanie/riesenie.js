
// generate random id
function randomId () {
  return Math.random()
    .toString()
    .substr(2, 10);
}

it('Creates todo item via api and checks its existence in DOM', () => {

  cy
    .visit('/');

  // send request to create an item
  cy
    .request({
      method: 'POST',
      url: '/todos',
      body: {
        title: 'first todo',
        completed: false,
        id: randomId()
      } 
    });

  cy
    .get('.todo')
    .should('have.length', 1);
  
});

it('Creates completed todo', () => {

  cy
    .visit('/');

  // send request to create an item
  cy
    .request({
      method: 'POST',
      url: '/todos',
      body: {
        title: 'first todo',
        completed: true,
        id: randomId()
      } 
    });

  cy
    .get('.todo')
    .should('have.length', 1);

  cy
    .get('.todo')
    .should('have.class', 'completed');
  
});

it('Resets todo list before opening app', () => {

  // send request to create an item
  cy
    .request({
      method: 'POST',
      url: '/reset'
    });

  cy
    .visit('/');

  cy
    .get('.todo')
    .should('have.length', 0);
  
});