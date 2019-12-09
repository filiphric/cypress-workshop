describe('1', () => {

  before( () => {

    cy.log('Akcia číslo ...');

  });

  beforeEach(() => {

    cy.log('Akcia číslo ...');
    
  });

  context('1.2', () => {

    before(() => {

      cy.log('Akcia číslo ...');
      
    });

    beforeEach(() => {

      cy.log('Akcia číslo ...');
      
    });

    it('1.2.1', () => {

      cy.log('Akcia číslo ...');
  
    });
        
  });

});