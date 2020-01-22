describe('1', () => {

  before(() => {
    
    cy
      .log('Before - 1');

  });

  beforeEach(() => {

    cy
      .log('BeforeEach - 1');
    
  });

  it('Test - 1', () => {
    
  });

  describe('2', () => {

    before(() => {
    
      cy
        .log('Before - 2');
  
    });
  
    beforeEach(() => {
  
      cy
        .log('BeforeEach - 2');
      
    });

    it('Test - 2', () => {
    
    });

    describe('3', () => {

      before(() => {
      
        cy
          .log('Before - 3');
    
      });
    
      beforeEach(() => {
    
        cy
          .log('BeforeEach - 3');
        
      });
  
      it('Test - 2', () => {
      
      });
      
    });
    
  });
  
});