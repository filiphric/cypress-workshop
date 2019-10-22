## 💻 Konfigurácia

### 📚 Naučíš sa

- ako konfigurovať parametre Cypressu
- ako nastaviť enviromentálne premenné

+++

## Konfigurácia (Cypress.config)

- `baseUrl`
- `env`
- `reporter`
- `video`
- a oveľa viac

+++

Cypress konfigurácia sa dá nastaviť pomocou
- `cypress.json`
- command line argumentov
- environment premenných
- cez plugin
- pri spustení Cypressu

+++

## Otázka

> Kde je uložená konfigurácia?

+++

## `cypress.json`

Otvor `cypress.json` a pozri, aké nastavenia sú na projekte

```json
{
  "viewportWidth": 400,
  "viewportHeight": 800,
  "ignoreTestFiles": "answer.js",
  "baseUrl": "http://localhost:3000"
}
```

+++

## `cypress.json` IntelliSense

![`cypress.json` IntelliSense in VSCode](/slides/10-configuration/img/cypress.json-intellisense.png)

V moderných editoroch, ako je VS Code, je možné pre `cypress.json` nastaviť intellisense

+++

## VSCode

V user, global, alebo workspace settings si nastav:

```json
{
  "json.schemas": [
    {
      "fileMatch": ["cypress.json"],
      "url": "https://on.cypress.io/cypress.schema.json"
    }
  ]
}
```

Prečítaj si: [https://glebbahmutov.com/blog/json-schema-for-the-win/](https://glebbahmutov.com/blog/json-schema-for-the-win/)

+++

## VSCode (alternatíva)

alebo si pridaj `$schema` property do `cypress.json`

```json
{
  "viewportWidth": 600,
  "viewportHeight": 800,
  "ignoreTestFiles": "answer.js",
  "baseUrl": "http://localhost:3000",
  "$schema": "https://on.cypress.io/cypress.schema.json"
}
```

Read: [https://glebbahmutov.com/blog/json-schema-for-the-win/](https://glebbahmutov.com/blog/json-schema-for-the-win/)

+++

## command line argumenty

`cypress.json` je možné prepísať cez `--config` flag

```shell
npx cypress open \
  --config defaultCommandTimeout=10000
```

Note:
Try running `cypress/integration/02-adding-items/demo.js` spec.
Commonly used with `cypress run` command (specific spec, longer timeouts)

+++

## npm package scripty

**Pozor ⚠️** ak spúšťaš Cypress cez NPM package script, treba použiť `--` na pridanie ďalších argumentov

```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
```

```shell
npm run cy:run -- --config defaultCommandTimeout=10000
```

+++

## CYPRESS_ premenné

`cypress.json` je možné prepísať pomocou premenných, ktoré začínajú `CYPRESS_`

```shell
CYPRESS_baseUrl=http://todomvc.com/examples/dojo/ npx cypress open
# same
CYPRESS_BASE_URL=http://todomvc.com/examples/dojo/ npx cypress open
```

Note:
`cypress.json` < environment variables < CLI parameter

+++

## plugin

v súbore `cypress/plugins/index.js`

```js
module.exports = (on, config) => {
  config.baseUrl = 'http://todomvc.com/examples/dojo/'
  // change more options ...
  return config
}
```

Docs: [https://on.cypress.io/configuration-api](https://on.cypress.io/configuration-api)

+++

## Konfigurácia počas testu

Je moůzné meniť konfiguráciu na úrovni testu pomocou [Cypress.config](https://on.cypress.io/config) príkazu.

```js
Cypress.config('baseUrl', 'http://todomvc.com/examples/dojo/')
beforeEach(function visitSite () {
  cy.log('Visiting', Cypress.config('baseUrl'))
  cy.visit('/')
})
```

Note:
Pozor na kombináciu rôznych prístupov, pretože rôzne poradie a mutácie vedia v testoch vyrobiť zmätok

+++

## Konečná konfigurácia

![resolved configuration](/slides/10-configuration/img/configuration.png)

+++

## Poradie konfigurácie

`cypress.json` < environment variable < CLI parameter < plugin < run-time

+++

## Environmentálne premenné

*Tie, ktoré nie sú súčasťou Cypress konfigurácie* - username, heslo, atď.

Docs: [https://on.cypress.io/environment-variables](https://on.cypress.io/environment-variables)

+++

## Environmentálne premenné

### `cypress.json` "env"

```json
{
  "baseUrl": "http://localhost:3000",
  "env": {
    "todoTitle": "env todo"
  }
}
```
+++

## Environmentálne premenné

Premenné je možné použiť v teste:
```js
it('has env item', function () {
  expect(Cypress.env('todoTitle'))
    .to.equal('env todo')
})
```

+++

## Environmentálne premenné

Premenné sú dostupné v browseri

![cypressEnv](/slides/06-configuration/img/cypressEnv.png)

+++

## Environmentálne premenné

### `cypress.env.json`

```json
{
  "eyes": "brown",
  "t-shirt": "large"
}
```

+++

## Použitie environmentálnych premenných

```js
Cypress.env() // vráti celý objekt
Cypress.env(name) // vráti jednu hodnotu
```

See [https://on.cypress.io/env](https://on.cypress.io/env)

+++

## Environmentálne premenné

### command-line argumenty

```sh
npx cypress open --env todoTitle="env todo"
```

+++

![env variables from CLI](/slides/10-configuration/img/env-from-cli.png)

+++

## Todo

Pošli do env premenných argument a odsleduj si ho v GUI

```sh
npx cypress open --env ???
```

+++

## Environmentálne premenné


```sh
CYPRESS_todoTitle="env todo" CYPRESS_name=CyBot \
  npx cypress open
```

Neznáme `CYPRESS_` premenné budú pridané do  `env` objektu (tie, ktoré nie sú v config)

+++

![env variables from env](/slides/10-configuration/img/env-from-env.png)

+++

## Environmentálne premenné

### plugin

```js
module.exports = (on, config) => {
  config.env.fooBar = 'baz'
  return config
}
```

+++

## Environmentálne premenné

### počas testu

```js
it('has env', () => {
  Cypress.env('life', 1)
  expect(Cypress.env('life')).to.equal(1)
  // zmena viacerých hodnôt
  Cypress.env({
    life: 1,
    state: 'busy'
  })
})
```

+++

## Environmentálne premenné

🛑 Počas testu nie je možné meniť premenné pomocou `Cypress.config('env', ...)`

```js
it('has env', () => {
  expect(Cypress.env('life')).to.equal(42)
  Cypress.config('env', {
    life: 1
  })
  // nefunguje
  expect(Cypress.env('life')).to.equal(42)
})
```

✅ Vždy používaj `Cypress.env(name, value)` na zmenu premenných

+++

## Zhrnutie

| `config` | `env` |
| -------- | ----- |
| `cypress.json` | `cypress.json` |
| command line | command line |
| environment | environment |
| plugin | plugin |
| run-time | run-time |
| | `cypress.env.json` |
