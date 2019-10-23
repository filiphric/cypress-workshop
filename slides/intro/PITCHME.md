# Filip Hric

- QA Lead & Slido test automation maker, Cypress ambassador
- filip (at) slido.com
- [@filip_hric](https://twitter.com/filip_hric)

+++

# Skôr než začneme

- choďte prosím na slido.com
- zadajte kód #zero2hero
- pýtajte sa!

Note: 
[https://wall.sli.do/event/qihp8bzn](https://wall.sli.do/event/qihp8bzn)
Moje skúsenosti so Cypressom (1 star = žiadne, 10 stars = expert)
Moje skúsenosti s NodeJS, npm, Command line (1 star = žiadne, 10 stars = expert)
Moje skúsenosti s Chrome DevTools (1 star = žiadne, 10 stars = expert)
Používam textový editor

+++

## Obash workshopu

- inštalácia intro, popis testovanej aplikácie
- Vytvorenie projektu v Cypress
- Základné príkazy
- Pridávanie položiek v TodoMVC
- Hráme sa so selectormi
- Resetovanie stavu
- Pracujeme s networkom
- Konfigurácia
- Custom commandy
- Záver workshopu

+++

Ak máte so Cypressom predošlé skúsenosti, pomáhajte ostatným počas workshopu 🙏

+++

## Technické požiadavky

Čo budete potrebovať:

- `git` pre naklonovanie repozitára
- Node verziu 6 alebo vyššie pre nainštalovanie dependencii

```text
git clone https://github.com/filiphric/cypress-workshop.git
cd cypress-workshop
npm install
```

+++

## Ako je usporiadaný repozitár

- `/todomvc` je webová aplikácia, ktorú budeme testovať
- všetky testy sú v `cypress/integration` folderi
  - jednotlivé cvičenia sú v subfoldroch:
    - `01-basic`
    - `02-adding-items`
    - atď.
- aplikáciu `todomvc` maj prosím počas celého workshopu zapnutú

+++

## `todomvc`

Pozrime sa na aplikáciu

- `cd todomvc`
- `npm start`
- `open localhost:3000`

**dôležité** majte aplikáciu zapnutú počas celého trvania workshopu

Note:
The students should open DevTools and look at XHR requests that go between the web application and the server. Also the students should find `todomvc/data.json` file with saved items.

+++

![TodoMVC](/slides/intro/img/todomvc.png)

+++

![Network](/slides/intro/img/network.png)

+++

## Otázky v Slido!

eventkód: *#zero2hero*

Note:
