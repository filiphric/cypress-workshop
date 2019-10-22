## 💻 Pracujeme s networkom

### 📚 Naučíš sa

- ako sledovať nework requesty a ako ich manipulovať
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

### Todo

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

Read [Introduction to Cypress](https://on.cypress.io/introduction-to-cypress) "Commands Run Serially"

+++

## Todo

add to test "starts with zero items":

- wait for the XHR alias like before
- its response body should be an empty array

![Checking response body](/slides/05-xhr/img/response-body.png)

+++

## Stub network call

Update test "starts with zero items (stubbed response)"

- instead of just spying on XHR call, let's return some mock data

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
**tip:** use [`cy.fixture`](https://on.cypress.io/fixture) command

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

### Spying on adding an item XHR

When you add an item through the DOM, the app makes `POST` XHR call.

![Post new item](/slides/05-xhr/img/post-item.png)

Note:
It is important to be able to use DevTools network tab to inspect the XHR and its request and response.

+++

**Todo 1/2**

- write a test "posts new item to the server" that confirms that new item is posted to the server

![Post new item](/slides/05-xhr/img/post-item.png)

Note:
see instructions in the `05-xhr/spec.js` for the test

+++

**Todo 2/2**

- write a test "posts new item to the server response" that confirms that RESPONSE when a new item is posted to the server

![Post new item response](/slides/05-xhr/img/post-item-response.png)

Note:
see instructions in the `05-xhr/spec.js` for the test

+++

## Bonus

Network requests guide at [https://on.cypress.io/network-requests](https://on.cypress.io/network-requests). Question: which requests do you spy on, which do you stub?

+++

## Testing Loading state

In the application we are showing (very quickly) "Loading" state

```html
<div class="loading" v-show="loading">Loading data ...</div>
```

+++

## Todo

- delay the loading XHR request
- assert the UI is showing "Loading" element
- assert the "Loading" element goes away after XHR completes

⌨️ test "shows loading element"
