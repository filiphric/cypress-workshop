## 💻 Pracujeme s networkom

### 📚 Naučíš sa

- ako sledovať nework requesty a ako ich manipulovať (spying a stubbing)
- ako čakať na network requesty zavolané z aplikácie
- ako testovať odpovede network requestov

+++

- maj aplikáciu `todomvc` zapnutú
- otvor `cypress/integration/05-xhr/spec.js` a pridaj spusti prvý test `(it.only)`

+++

## Situácia

- v teste **nie je resetovanie** stavu pred každým testom
- test nám napriek tomu prešiel

```javascript
it('starts with zero items', () => {
  cy.visit('/')
  cy.get('li.todo').should('have.length', 0)
})
```

![Should have failed](/slides/05-xhr/img/test-passes-but-this-is-wrong.png)

+++

## Popis problému

@ul

- stránka sa načíta
- aplikácia urobí API volanie na `GET /todos`
  - medzičasom zobrazuje prázdny zoznam
- Cypress test prejde!
- `GET /todos` vráti dve položky
  - vykreslia sa v aplikácii
  - ale test medzičasom skončil

@ulend

+++

## cy.wait

```javascript
it('starts with zero items', () => {
  cy.visit('/')
  cy.wait(1000)
  cy.get('li.todo').should('have.length', 0)
})
```

![Waiting works](/slides/05-xhr/img/waiting.png)

+++

**lepší spôsob** je však počkať si na odpoveď špecifického API volania. Network requesty je možné vidieť v browseri, rovnako ako DOM.

+++

### Todo (spying)

V súbore `05-xhr/spec.js` uprav test "starts with zero items"

@ul

- zapni Cypress mock server pomocou commandu `cy.server`
  - zisti, či je potrebné dať tento command _pred_ alebp _za_ `cy.visit`?
- použi `cy.route` pre odchytenie requestu
- ulož si request ako alias
- počkaj si na request pomocou aliasu 
  - potom skontroluj aplikáciu

@ulend

**tipy:** [`cy.server`](https://on.cypress.io/server), [`cy.route`]('https://on.cypress.io/route), [Network requests guide](https://on.cypress.io/network-requests)

+++

```js
cy.server()
cy.route('GET', '/todos').as('todos')
cy.visit('/')
cy.wait('@todos')
// cy.get() will run AFTER cy.wait() finishes
cy.get('li.todo').should('have.length', 0)
```
+++

## Todo

do testu "starts with zero items":

- pridaj wait na api call ako predtým
- vytvor test na response body, ktorý overí, že response je prázdne pole

![Checking response body](/slides/05-xhr/img/response-body.png)

+++

## Manipulácia API volaní (stubbing)

Uprav test "starts with zero items (stubbed response)"

- okrem odsledovania API volania, skús navyše zmeniť odpoveď api callu

```javascript
// returns an empty list
// when `GET /todos` is requested
cy.route('GET', '/todos', [])
```

+++

```javascript
it('starts with zero items (fixture)', () => {
  // start Cypress network server
  // stub `GET /todos` with fixture "empty-list"

  // visit the page
  cy.visit('/')

  // then check the DOM
  cy.get('li.todo').should('have.length', 0)
})
```
**tip:** použi [`cy.fixture`](https://on.cypress.io/fixture) command

+++

```javascript
it('loads several items from a fixture', () => {
  // start Cypress network server
  // stub route `GET /todos` with data from a fixture file "two-items.json"
  // THEN visit the page
  cy.visit('/')
  // then check the DOM: some items should be marked completed
  // we can do this in a variety of ways
})
```

+++

@snap[north span-99]
### Sledovanie API volania pri akcii aplikácie
@snapend
@snap[west span-40]
Keď pridáš položku v todo liste, urobí sa api volanie metódou `POST` 
@snapend
@snap[east span-40]
![Post new item](/slides/05-xhr/img/post-item.png)
@snapend


Note:
It is important to be able to use DevTools network tab to inspect the XHR and its request and response.

+++

**Todo 1/2**

- uprav test "posts new item to the server" pomocou ktorého overíš, že sa pri vytvorení novej položky na server odoslal request

![Post new item](/slides/05-xhr/img/post-item.png)

Note:
see instructions in the `05-xhr/spec.js` for the test

+++

**Todo 2/2**

- uprav test "posts new item to the server response" pomocou ktorého overíš, že sa pri vytvorení novej položky vrátila správna odpoveď zo servra

![Post new item response](/slides/05-xhr/img/post-item-response.png)

Note:
see instructions in the `05-xhr/spec.js` for the test

+++

## Otestovanie loadingu

V aplikácii sa na krátky moment objaví "Loading" state

```html
<div class="loading" v-show="loading">Loading data ...</div>
```

+++

## Todo

- vytvor delay pre loadovanie API requestov (pozri dokumentáciu `cy.server`)
- použi request stubbing
- vytvor test pre zobrazenie "Loading" elementu
- v teste over, že "Loading" element zmizne po tom, ako request vráti odpoveď

⌨️ test "shows loading element"
+++

## Bonus

Odsledovaný request si vieš uložiť do Cypress.env() a neskôr ho v teste použiť

```js
it.only('shows loading element', () => {

  const text = 'hello';

  Cypress.env('todos', [])

  cy.server()
  cy.route('POST', '/todos').as('createToDo')
  cy.visit('/')
  cy.get('.new-todo').type(`${text}{enter}`)
  cy.wait('@createToDo').then( todo => {
    Cypress.env('todos').push(todo.response.body)
    cy.findByText(text).should('be.visible');
    cy.request('DELETE', `/todos/${Cypress.env('todos')[0]['id']}`)
  })
})
```
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
@snap[midpoint span-20]
@fa[arrow-right]
@snapend
@snap[east span-40]
![curl](/slides/04-reset-state/img/import.png)
@snapend

+++

## Otázka v Slido
eventkód: #zero2hero