## ☀️ Resetovanie stavu

### 📚 Naučíš sa

- ako môže vznikať konflikt medzi testami
- ako to vyriešiť resetovaním stavu medzi testami

+++

- maj aplikáciu `todomvc` stále zapnutú
- otvor si `cypress/integration/04-reset-state/spec.js`
- čo sa stane ak sa spustíš test viackrát?

+++

![First test run](/slides/04-reset-state/img/passing-test.png)

+++

![Second test run](/slides/04-reset-state/img/failing-test.png)

+++

## Pozri DevTools

![Inspect first XHR call](/slides/04-reset-state/img/inspect-first-get-todos.png)

+++

```javascript
beforeEach(() => {
  cy.visit('/')
})
const addItem = text => {
  cy.get('.new-todo').type(`${text}{enter}`)
}
it.only('adds two items', () => {
  addItem('first item')
  addItem('second item')
  cy.get('li.todo').should('have.length', 2)
})
```

+++

## Otázky v Slido

eventkód: #zero2hero

+++

## Zresetovanie DB cez súbor

`todomvc/data.json`

@css[half-image]
![image](/slides/04-reset-state/img/data.png)
@cssend

+++

## Zresetovanie DB cez súbor

`todomvc/reset-db.js`
`npm run reset`

![Reset](/slides/04-reset-state/img/reset.png)

+++

## Zresetovanie DB cez súbor

⚠️Pri tomto postuje je však potrebné zresetovať aplikáciu

+++

## Zresetovanie DB cez postmana

![Postman](/slides/04-reset-state/img/postman.png)

+++

## 💡 Bonus tip
Skopíruj si curl z DevTools network tabu a importuj do postmana
@snap[west]
![curl](/slides/04-reset-state/img/curl.png)
@snapend
@snap[east]
![curl](/slides/04-reset-state/img/import.png)
@snapend

+++

## Best practices

- resetuj stav pred každým testom
  - [návod pre best practices](https://on.cypress.io/best-practices)
- použi [`cy.request`](https://on.cypress.io/request), [`cy.exec`](https://on.cypress.io/exec), [`cy.task`](https://on.cypress.io/task)
