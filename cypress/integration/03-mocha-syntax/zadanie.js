describe('Adding items to app', () => {

  // before - zaloguj začiatok testovacej série
  // beforeEach uprav text tak, aby sa aplikácia otvorila pred každým testom
  // after - zaloguj koniec testovacej série
  // afterEach - zaloguj koniec jednotlivých testov

  it('Marks item as completed', () => {

    cy
      .visit('localhost:3000'); // opakujúci sa kód
  
    cy
      .get('.new-todo')
      .type('simple{enter}');
  
    cy
      .get('input[type="checkbox"]')
      .check();
  
  });
  
  it('Delete todo item', () => {

    cy
      .visit('localhost:3000'); // opakujúci sa kód
  
    cy
      .get('.destroy')
      .click({ force: true });
  
    cy
      .contains('simple')
      .should('not.exist');
    
  });
  
});

