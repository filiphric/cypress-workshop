it('stubs items', () => {

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
    .log('there are no items in list')
    .get('li.todo')
    .should('have.length', 0);
  
});

it('loads items from a fixture', () => {

  // fixtures nájdeš vo foldri cypress/fixtures
  // o tom, ako použiť fixtures sa dočítaš tu -> https://docs.cypress.io/api/commands/route.html#Fixtures

  cy
    .visit('/');

});

it('posts new item to the server', () => {

  // začni test s 0 položkami, potom jednu pridaj
  
  cy
    .visit('/');

  cy
    .log('add new item')
    .get('.new-todo')
    .type('test api{enter}');

  // otestuj či request vrátil správny response
  // hint -> https://on.cypress.io/its

});

it('shows error when adding new item', () => {

  // uprav test tak, aby vrátil status 404 keď sa používateľ pokúsi vytvoriť novú položku v todo liste
  // použi na to príkaz cy.route()
  // hint -> https://docs.cypress.io/api/commands/route.html#Options

  cy
    .visit('/');
  
});

it('loads slowly and sees „loading items“ element', () => {
  
  // otestuj viditeľnosť „loading“ elementu
  // hint -> nastav delay servera, návod ako na to nájdeš v dokumentácii

  cy
    .visit('/');

});

