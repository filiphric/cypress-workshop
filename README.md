> Vitaj na [Cypress.io](https://www.cypress.io/) workshope!

## Technické požiadavky: ⚙️

- Akýkoľvek počítač: Mac, Windows, Linux
- [Node 6+](https://nodejs.org/)
- [git](https://git-scm.com)

## Príprava:  
Stiahni si kód a nainštaluj si dependencie

```bash
git clone git@github.com:filiphric/cypress-workshop.git
cd cypress-workshop
npm install
```

Ak je to potrebné nainštaluj dependencie vo vnútri TodoMVC foldra

```bash
cd todomvc
npm install
```

### Kontrola ✅

Skontroluj si či všetko funguje zadaním nasledovných príkazov do terminálu:

```shell
cd todomvc
npm start
```

v termináli by sa mala objaviť hláška:

```text
> json-server --static . data.json --middlewares ./node_modules/json-server-reset


  \{^_^}/ hi!

  Loading data.json
  Loading ./node_modules/json-server-reset
  Done

  Resources
  http://localhost:3000/todos

  Home
  http://localhost:3000
```

Poznámka pre používateľov systému Windows: ak `npm start` vyhodí chybu, je to pradepodobne kvôli prvému príkazu v tomto skripte. Ak vidíš túto chybu, presuň sa prosím do foldra "todomvc" (príkazom `cd todomvc`) a zadaj príkaz `npm start` odtiaľ.

Otvor si druhé kono terminálu a otvor si Cypress pomocou nasledovného príkazu:

```bash
$ npm run cy:open

> testing-workshop-cypress@1.0.0 cy:open /git/testing-workshop-cypress
> cypress open
```

## Aplikácia 💾

[Vue.js](https://vuejs.org/) + [Vuex](https://vuex.vuejs.org/) + REST server aplikácia, ktorú budeme testovať je vo foldri `todomvc`. Aplikácia je popísaná [v tomto blogu](https://www.cypress.io/blog/2017/11/28/testing-vue-web-application-with-vuex-data-store-and-rest-backend/). Aplikácia beží aj bez pripojenia na internet

## Prezentácia  🖥

Prezentáciu je možné si pozrieť na [https://gitpitch.com/filiphric/cypress-workshop][presentation] začína súborom [PITCHME.md](PITCHME.md), prezentovaná pomocou [GitPitch](https://gitpitch.com/). `PITCHME.md` obsahuje súbory z foldra [slides](slides). Účastnícikom workshopu sa odporúča otvoriť si [prezentáciu][presentation] a sledovať priebeh. Jednotlivé časti prezentácie je možné otvárať aj separátne kliknutím na tabuľku nižšie.

[presentation]: https://gitpitch.com/filiphric/cypress-workshop

## Obsah 🗂

|                            | topic                                  | folder                                                               | contents                                                           | slides                                                                                  |
| -------------------------- | -------------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| [🔗](#intro)               | Intro, TodoMVC application             | [todomvc](todomvc)                                                   | [intro.md](slides/intro/PITCHME.md)                                | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/intro)                  |
| [🔗](#start)               | Vytvorenie projektu v Cypress          | [00-start](00-start)                                                 | [00-start](slides/00-start/PITCHME.md)                             | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/00-start)               |
| [🔗](#basic)               | Základné príkazy                       | [01-basic](cypress/integration/01-basic)                             | [01-basic](slides/01-basic/PITCHME.md)                             | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/01-basic)               |
| [🔗](#adding-items)        | Pridávanie položiek v TodoMVC          | [02-adding-items](cypress/integration/02-adding-items)               | [02-adding-items](slides/02-adding-items/PITCHME.md)               | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/02-adding-items)        |
| [🔗](#selector-playground) | Hráme sa so selectormi                 | [03-selector-playground](cypress/integration/03-selector-playground) | [03-selector-playground](slides/03-selector-playground/PITCHME.md) | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/03-selector-playground) |
| [🔗](#reset-state)         | Resetovanie stavu                      | [04-reset-state](cypress/integration/04-reset-state)                 | [04-reset-state](slides/04-reset-state/PITCHME.md)                 | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/04-reset-state)         |
| [🔗](#xhr)                 | Pracujeme s networkom                  | [05-xhr](cypress/integration/05-xhr)                                 | [05-xhr](slides/05-xhr/PITCHME.md)                                 | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/05-xhr)                 |
| [🔗](#configuration)       | Konfigurácia                           | -                                                                    | [06-configuration](slides/06-configuration/PITCHME.md)             | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/06-configuration)       |
| [🔗](#custom-commands)     | Custom commandy                        | [07-custom-commands](cypress/integration/07-custom-commands)         | [07-custom-commands](slides/07-custom-commands/PITCHME.md)         | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/07-custom-commands)     |
| [🔗](#end)                 | Záver workshopu                        | -                                                                    | [end](slides/end/PITCHME.md)                                       | [link](https://gitpitch.com/filiphric/cypress-workshop?p=slides/end)                    |


## Thanks
Thanks to Gleb Bahmutov, author of the original workshop found at [https://github.com/cypress-io/testing-workshop-cypress](https://github.com/cypress-io/testing-workshop-cypress), on which this workshop is heavily built on.