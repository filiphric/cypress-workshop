describe('1', () => {

  before( () => {

    cy.log('Akcia číslo 1');

  });

  beforeEach(() => {

    cy.log('Akcia číslo 3');
    
  });

  context('1.2', () => {

    before(() => {

      cy.log('Akcia číslo 2');
      
    });

    beforeEach(() => {

      cy.log('Akcia číslo 4');
      
    });

    it('1.2.1', () => {

      cy.log('Akcia číslo 5');
  
    });
        
  });

});