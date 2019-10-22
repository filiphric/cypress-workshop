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

Otvor "Selector Playground"

![Selector playground button](/slides/03-selector-playground/img/selector-button.png)

+++

Selector playground nám vie poskytnúť omnoho lepšie selectory

![Selector playground](/slides/03-selector-playground/img/selector-playground.png)

+++

⚠️ Ale môže posktynúť aj veľmi zvláštne možnosti

![Default suggestion](/slides/03-selector-playground/img/default-suggestion.png)

+++

Prečítaj si o [best practices](https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements)

![Best practice](/slides/03-selector-playground/img/best-practice.png)

+++

## Ako udržať testy odolné voči zmenám?
![Best practice](/slides/03-selector-playground/img/kent.png)

+++

## Cypress testing library
```shell
npm install --save-dev cypress @testing-library/cypress
```
do foldra `cypress/support/commands.js` pridaj import
```js
import '@testing-library/cypress/add-commands'
```
na začiatok filu pridaj
```js
/// <reference types="@types/testing-library__cypress" />
```
+++
@snap[west]
### Varianty
```js
getBy
getAllBy
queryBy
queryAllBy
findBy
findllBy
``` 
@snapend
@snap[east]
### Query
```js
ByLabelText
ByPlaceholderText
ByText
ByAltText
ByTitle
ByDisplayValue
ByRoles
ByTestId
``` 
@snapend

+++

## TODO
- použi selector playground
  - označ nadpis
  - označ input field
- použi testing library
  - findByText
  - findByPlaceholderText
  - findByTestId

+++

## DevTools selector plugin
v Cypress browseri si nainštaluj [css selector helper](https://chrome.google.com/webstore/detail/css-selector-helper-for-c/gddgceinofapfodcekopkjjelkbjodin)

![Best practice](/slides/03-selector-playground/img/selector-helper.png)

