# Cypress projekt a jeho štruktúra

## Vytvorenie nového projektu

Pre vytvorenie nového Cypress projektu zadaj nasledovný príkaz:

```text
npx cypress open --project ./new-project
```

Po otvorení sa Ti otvorí GUI:

![](../../.gitbook/assets/snimka-obrazovky-2019-11-25-o-22.18.53.png)

V textovom editore môžeš vidieť, že Cypress vytvoril nový folder `new-project`, v ktorom sa nachádzajú ďalšie súbory.

![](../../.gitbook/assets/snimka-obrazovky-2019-11-25-o-22.22.28%20%281%29.png)

### Na čo slúžia jednotlivé súbory

| Názov | Popis |
| :--- | :--- |
| cypress.json | Cypress settings |
| cypress/integration | test súbory |
| cypress/fixtures | mock dáta |
| cypress/plugins | Cypress pluginy |
| cypress/support | commandy, utility, defaultné akcie |

## Ako otvoriť Cypress GUI

```bash
npx cypress open
$(npm bin)/cypress open
./node_modules/.bin/cypress open
```

Pre rýchlejšie otváranie je dobrou praxou vytvoriť si v `package.json` nasledovné skripty:

```javascript
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run"
  }
}
```

{% hint style="info" %}
Príkaz`cypress run` slúži na spustenie testov v headless móde, o ktorom si povieme v ďalších kapitolách
{% endhint %}

\`\`

