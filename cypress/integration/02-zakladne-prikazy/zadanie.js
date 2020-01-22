it('loads', () => {

  cy
    .visit('localhost:3000');

});

it('Has zero items', () => {

  // over, či sa v todo liste nachádza presne 0 položiek
  // hint: použi príkaz .should()
  
});

it('Adds two items', () => {

  // pridaj do testu dve položky
  // využi na to príkazy .get(), .click() a .type()
 
});

it('Adds many items', () => {

  const N = 5;
  for (let k = 0; k < N; k += 1) {
    // pridaj do testu ľubovoľný počet (N) položiek a použi na to funkciu
  }

});

it('Marks item as completed', () => {

  // označ poloźku ako hotovú
  
});

it('Delete todo item', () => {

  // pozor: na button „x“ pre vymazanie položky sa nedá kliknúť, pretože sa zobrazuje až na hoveri
  
});