## 💻 Hráme sa so selectormi

### 📚 Naučíš sa

- používať Cypress Selector Playground
- najlepšie praktiky pri vyberaní selectorov

+++

- maj aplikáciu `todomvc` stále zapnutú
- otvor si `03-selector-playground/spec.js`

+++

> Ako získať správny selector pre `cy.get(...)`?

- Pomôžu nám Chrome DevTools

+++

![Chrome suggests selector](/slides/03-selector-playground/img/chrome-copy-js-path.png)

+++

Open "Selector Playground"

![Selector playground button](/slides/03-selector-playground/img/selector-button.png)

+++

Selector playground can suggest much better selectors.

![Selector playground](/slides/03-selector-playground/img/selector-playground.png)

+++

⚠️ It can suggest a weird selector

![Default suggestion](/slides/03-selector-playground/img/default-suggestion.png)

+++

Read [best-practices.html#Selecting-Elements](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)

![Best practice](/slides/03-selector-playground/img/best-practice.png)

+++

## Todo

- add test data ids to `todomvc/index.html` DOM markup
- use new selectors to write `cypress/integration/03-selector-playground/spec.js`

Note:
The updated test should look something like the next image

+++

![Selectors](/slides/03-selector-playground/img/selectors.png)

+++

## Cypress is just JavaScript

```js
import {selectors, tid} from './common-selectors'
it('finds element', () => {
  cy.get(selectors.todoInput).type('something{enter}')

  // "tid" forms "data-test-id" attribute selector
  // like "[data-test-id='item']"
  cy.get(tid('item')).should('have.length', 1)
})
```
