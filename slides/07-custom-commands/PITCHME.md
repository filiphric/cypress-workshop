## 💻 Custom commandy

### 📚 naučíš sa

- ako vytvoriť vlastný `cy` command
- ako vytvoriť TypeScript definíciu pre nový command

+++

- maj aplikáciu `todomvc` zapnutú
- otvor `cypress/integration/07-custom-commands/spec.js`

+++

## Príklady využitia custom commandov

- zdieľanie kódu naprieč celým projektom
- komplexná logika s custom logovaním
  * login 
  * mnohé akcie aplikácie

📝 [on.cypress.io/custom-commands](https://on.cypress.io/custom-commands)

+++

## TO DO

Napíš custom command pre vytvorenie to do

```js
// instead of this
cy.get('.new-todo')
  .type('todo 0{enter}')
// use this
cy.createTodo('todo 0')
```

+++

## Todo: write and use "createTodo"

```js
Cypress.Commands.add('createTodo', todo => {
  cy.get('.new-todo').type(`${todo}{enter}`)
})
it('creates a todo', () => {
  cy.createTodo('my first todo')
})
```

+++

## ⬆️ Vylepšime to

- sfunkčnime IntelliSense pre náš custom command `createTodo`
- skrášlime Command Log

+++

## Todo: add `createTodo` to `cy` object

How: [https://github.com/cypress-io/cypress-example-todomvc#cypress-intellisense](https://github.com/cypress-io/cypress-example-todomvc#cypress-intellisense)

+++

⌨️ v súbore `cypress/integration/07-custom-commands/custom-commands.d.ts` pridaj:

```ts
/// <reference types="cypress" />
declare namespace Cypress {
  interface Chainable<Subject> {
    /**
     * Creates one Todo using UI
     * @example
     * cy.createTodo('new item')
     */
    createTodo(todo: string): Chainable<any>
  }
}
```

+++

Načítaj si definíciu `cypress/integration/ /spec.js`

```js
/// <reference path="./custom-commands.d.ts" />
```

+++

![Custom command IntelliSense](/slides/07-custom-commands/img/create-todo-intellisense.jpeg)

Ďalšie príklady: [https://slides.com/bahmutov/ts-without-ts](https://slides.com/bahmutov/ts-without-ts)

Note:
Editors other than VSCode might require work.

+++

⚠️ V `cypress.json` treba pridať ignorovanie ".d.ts" súborov pomocou atribútu `ignoreTestFiles` 

Note:
Otherwise Cypress will try load ".d.ts" file as spec and without TypeScript loader will fail.

+++

## Zlepšenie command logu

```js
Cypress.Commands.add('createTodo', todo => {
  cy.get('.new-todo', { log: false })
    .type(`${todo}{enter}`, { log: false })
  cy.log('createTodo', todo)
})
```

+++

## Ešte lepší command log

```js
Cypress.Commands.add('createTodo', todo => {
  const cmd = Cypress.log({
    name: 'create todo',
    message: todo,
    consoleProps () {
      return {
        'Create Todo': todo
      }
    }
  })
  cy.get('.new-todo', { log: false })
    .type(`${todo}{enter}`, { log: false })
})
```

+++

![createTodo log](/slides/07-custom-commands/img/create-todo-log.png)

+++

### Označ snapshot v commande

```js
cy.get('.new-todo', { log: false })
  .type(`${todo}{enter}`, { log: false })
  .then($el => {
    cmd
      .set({ $el })
      .snapshot()
      .end()
  })
```