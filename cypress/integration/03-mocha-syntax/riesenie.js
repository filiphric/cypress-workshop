describe('Adding items to app', () => {

  before(() => {
    
    cy
      .log('test suite begins');

  });

  beforeEach(() => {
    
    cy
      .visit('localhost:3000');

  });

  after(() => {
    
    cy
      .log('test suite finished');

  });

  afterEach(() => {
    
    cy
      .log('test case finished');

  });

  it('Marks item as completed', () => {
  
    cy
      .get('.new-todo')
      .type('simple{enter}');
  
    cy
      .get('input[type="checkbox"]')
      .check();
  
  });
  
  it('Delete todo item', () => {
  
    cy
      .get('.destroy')
      .click({ force: true });
  
    cy
      .contains('simple')
      .should('not.exist');
    
  });
  
});

