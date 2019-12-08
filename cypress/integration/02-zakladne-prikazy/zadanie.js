/// <reference types="cypress" />
it('loads', () => {

  cy
    .visit('localhost:3000');

  cy
    .contains('h1', 'todos');

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
    // pridaj do testu ľubovoľný počet položiek a použi na to funkciu
  }

});

it('Marks items as completed', () => {

  // označ poloźku ako hotovú
  
});