## 💻 Základné príkazy

### 📚 Naučíš sa

- `cy.contains` a retry logiku
- dva spôsoby ako spúšťať Cypress
- screenshoty a video nahrávanie

+++

- maj `todomvc` aplikáciu stále zapnutú
- otvor Cypress z root foldera pomocou príkazu `npm run cy:open`
- (zavri/otvor terminál, alebo zadaj `cd ..`)
- klikni na `01-basic/spec.js`

```js
/// <reference types="cypress" />
it('loads', () => {
  cy.visit('localhost:3000')
  cy.contains('h1', 'Todos App')
})
```

+++

`cy.contains('h1', 'Todos App')` nefunguje 😟

Note:
This is a good moment to show how Cypress stores DOM snapshots and shows them for each step.

+++

## Otázky

- kde nájdeš dokumentáciu pre `cy.contains` command?
- prečo command padol?
  - **hint**: použi DevTools
- vedel/a by si to opraviť?

+++

## Otázky

- prečo padne test až po štyroch sekundách? (modrý spinner)?
- vyskúšaj si `timeout`

+++

## Cypress má 2 príkazy

- `cypress open`
- `cypress run`

+++

## Ako na to?

- spusti iba tento test `cypress/integration/01-basic/spec.js` v headless móde

tip: `npx cypress run --help`

+++

## Bonus

- video recording [https://on.cypress.io/configuration#Videos](https://on.cypress.io/configuration#Videos)
- `cy.screenshot` command

+++

## Skús opraviť test

- vieš opraviť test?
- ako by si označil element:
  - cez text
  - cez id
  - cez classu
  - cez atribút

+++

## Aké testy písať? (otázka v Slido)

eventkód: *#zero2hero*

Note:
Longer tests, adding items then deleting one for example. Adding items via GUI and observing communication with the server. Adding items then reloading the page.
