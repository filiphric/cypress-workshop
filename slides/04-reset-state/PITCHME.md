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

### Zresetovanie DB cez súbor
`todomvc/data.json`
```js
{
  "todos": [
    {
      "title": "first item",
      "completed": false,
      "id": "9368373205"
    },
    {
      "title": "second item",
      "completed": false,
      "id": "2978561296"
    }
  ]
}
```


+++

## Zresetovanie DB cez súbor

`todomvc/reset-db.js`
`npm run reset`

```js
const write = require('fs').writeFileSync

const resetDatabase = () => {
  // for complex resets can use NPM script command
  // cy.exec('npm run reset:database')

  // for simple cases, can just overwrite the data file
  const data = {
    todos: []
  }
  const str = JSON.stringify(data, null, 2) + '\n'
  write('./data.json', str)
}

resetDatabase()
```

+++

## Zresetovanie DB cez súbor

⚠️Pri tomto postuje je však potrebné zresetovať aplikáciu

+++

## Zresetovanie DB cez postmana

![Postman](/slides/04-reset-state/img/postman.png)

+++

@snap[north]
## 💡 Bonus tip
@snapend
@snap[south span-99]
Skopíruj si curl z DevTools network tabu a importuj do postmana
@snapend
@snap[west span-40]
![curl](/slides/04-reset-state/img/curl.png)
@snapend
@snap[midpoint span-10]
@fa[arrow-right]
@snapend
@snap[east span-40]
![curl](/slides/04-reset-state/img/import.png)
@snapend

+++

## Best practices

- resetuj stav pred každým testom
  - [návod pre best practices](https://on.cypress.io/best-practices)
- použi [`cy.request`](https://on.cypress.io/request), [`cy.exec`](https://on.cypress.io/exec), [`cy.task`](https://on.cypress.io/task)
