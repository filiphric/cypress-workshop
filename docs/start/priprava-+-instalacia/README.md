# 💻 Repozitár + Inštalácia

Naklonuj si repozitár a nainštaluj čo treba. Postačia na to tri kroky:

```bash
git clone https://github.com/filiphric/cypress-workshop.git
cd cypress-workshop
npm install
```

{% hint style="warning" %}
Ak by niektorý z krokov skončil chybou, [skontroluj si prosím verziu **Node.js** a **git**](skontroluj-si-verziu-node-a-git.md).

Pokiaľ Ti nejde naklonovať repozitár, môžeš si ho stiahnúť ako .zip súbor [priamo na stránke GitHubu](https://github.com/filiphric/cypress-workshop).
{% endhint %}

## Čo nájdeš v repozitári

V repozitári sa nachádza všetko, čo budeme počas workshopu potrebovať.

* aplikáciu TodoMVC, ktoré budeme spoločne testovať
* všetky potrebné moduly a skripty
* praktické cvičenia a ich riešenia

## Skúška správnosti

Pred workshopom odporúčam vyskúšať, či Ti aplikácia TodoMVC funguje. Aplikáciu budeme používať počas nášho workshopu. Nepôjdeme teda na živý server, alebo web niekde na internete, ale pobeží nám všetko lokálne. 

### Aplikácia TodoMVC <a id="aplikacia-todomvc"></a>

Skús si zapnúť aplikáciu TodoMVC príkazom:

```bash
npm run start:todomvc
```

Po zadaní príkazu by sa Ti mal otvoriť browser s aplikáciou:

![](https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/assets%2F-LttIMlpZYOezH3vqWQe%2F-LtvM117xSli1D2CUiO-%2F-LtvS28kSgNGkzusuQPX%2FSni%CC%81mka%20obrazovky%202019-11-17%20o%2023.19.57.png?alt=media&token=670b1ffb-14c9-4645-b3e4-f89d62f77785)

{% hint style="warning" %}
Ak Ti príkaz vyhodí chybu, uisti sa, že sa v príkazovom riadku nachádzaš v správnom foldri a že si prešiel/la všetkými krokmi inštalácie.‌

To v akom foldri sa nachádzaš si overíš príkazom:

Windows:

```text
echo %cd%
```

Mac:

```text
pwd
```

Mal/a by si vidieť niečo ako:

```text
/Users/filiphric/cypress-workshop
```

Ak vidíš inú cestu, presuň sa prosím na správne miesto 🙂
{% endhint %}







