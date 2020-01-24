
// generate random id
function randomId () {
  return Math.random()
    .toString()
    .substr(2, 10);
}

describe('Sending todos via http request', () => {

  beforeEach(() => {
    
    cy
      .request({
        method: 'POST',
        url: '/reset'
      });

  });

  it('Creates todo item via api and checks its existence in DOM', () => {

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
      .visit('localhost:3000');

    cy
      .get('.todo')
      .should('have.length', 1);
  
  });

  it('Creates completed todo', () => {

    cy
      .visit('localhost:3000');

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
      .reload();

    cy
      .get('.todo')
      .should('have.length', 1);

    cy
      .get('.todo')
      .should('have.class', 'completed');
  
  });

  it('Deletes todo via http request', () => {

    let id = randomId();

    // send request to create an item
    cy
      .request({
        method: 'POST',
        url: '/todos',
        body: {
          title: 'first todo',
          completed: false,
          id
        } 
      });

    cy
      .visit('localhost:3000');

    cy
      .get('.todo')
      .should('have.length', 1);

    // send request to create an item
    cy
      .request({
        method: 'DELETE',
        url: `/todos/${id}`
      });

    cy
      .server();

    cy
      .route('GET', '/todos')
      .as('todosList');

    cy
      .reload();

    cy
      .wait('@todosList');

    cy
      .get('.todo')
      .should('have.length', 0);
    
  });

});