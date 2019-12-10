/// <reference types="cypress" />
it('loads', () => {

  cy
    .visit('localhost:3000');

});

it('Has zero items', () => {

  // over, či sa v todo liste nachádza presne 0 položiek
  
});

it('Adds two items', () => {

  // pridaj do testu dve položky
 
});

it('Adds many items', () => {

  const N = 5;
  for (let k = 0; k < N; k += 1) {
    // pridaj do testu ľubovoľný počet (N) položiek a použi na to funkciu
  }

});

it('Marks item as completed and deletes item', () => {

  // označ poloźku ako hotovú
  
});