# Príprava na workshop

## Technické požiadavky: ⚙️

* Akýkoľvek počítač: Mac, Windows, Linux
* Node verzia 8 alebo vyššia
* git
* Textový editor - odporúčam [VS Code](https://code.visualstudio.com/download), v ktorom budem počas workshopu pracovať aj ja 

{% hint style="info" %}
#### Node? Git? WTF? 😕

Ak si nie si istý/á verziou Node a Git, [pomôžem Ti na tejto stránke](skontroluj-si-verziu-node-a-git.md)
{% endhint %}

## Príprava:

Naklonuj si repozitár a nainštaluj čo treba. Postačia na to tri kroky

```bash
git clone https://github.com/filiphric/cypress-workshop.git
cd cypress-workshop
npm install
```

{% hint style="warning" %}
Ak by niektorý z krokov skončil chybou, [skontroluj si prosím verziu Node a Git](skontroluj-si-verziu-node-a-git.md).

Pokiaľ Ti nejde naklonovať repozitár, môžeš si ho stiahnúť ako .zip súbor [priamo na stránke GitHubu](https://github.com/filiphric/cypress-workshop).
{% endhint %}

## Čo je v repozitári?

V repozitári sa nachádza všetko, čo budeme počas workshopu potrebovať.

* aplikácie, ktoré budeme spoločne testovať:
  * TodoMVC
  * Realworld
* Cypress
* všetky potrebné moduly a skripty

## Skúška správnosti

Vyskúšaj si, či nám fungujú aplikácie, ktoré budeme testovať. Tieto aplikácie budeme používať počas nášho workshopu. Nepôjdeme teda na živý server, alebo web niekde na internete, ale pobeží nám všetko lokálne. 

{% hint style="info" %}
Nemusíš sa príliš obávať o to, ako sú jednotlivé aplikácie naprogramované. Spoločne sa s aplikáciami zoznámime a pozrieme sa na to, ako fungujú. Hlavne sa však zameriame na ich testovanie a na zamýšľanie sa nad tým, ako by k nim pristupoval bežný používateľ.
{% endhint %}

### Aplikácia TodoMVC

Skús si najprv zapnúť aplikáciu TodoMVC:

```bash
npm run start:todomvc
```

Po zadaní príkazu by si mal/a vidieť:

```text
> json-server --static . data.json --middlewares ./node_modules/json-server-reset


  \{^_^}/ hi!

  Loading data.json
  Loading ./node_modules/json-server-reset
  Done

  Resources
  http://localhost:3000/todos

  Home
  http://localhost:3004
```

{% hint style="warning" %}
Ak Ti príkaz vyhodí chybu, uisti sa, že sa nachádzaš v správnom foldri a že si prešiel/la všetkými krokmi inštalácie.
{% endhint %}

Otvor si browser a zadaj adresu `http://localhost:3004`. Aplikácia by mala byť live:

![](../../.gitbook/assets/snimka-obrazovky-2019-11-17-o-23.19.57.png)

### Aplikácia Realworld

Aplikáciu Realworld spustíš nasledovným príkazom:

```text
npm run start:realworld
```

Tento príkaz spustí webovú aplikáciu a server. Server beží na lokalite `localhost:3000` a webová aplikácia na `localhost:4100` Po otvorení tejto lokality by si v browseri mal vidieť nasledovnú stránku:

![](../../.gitbook/assets/snimka-obrazovky-2019-11-18-o-23.48.34.png)

