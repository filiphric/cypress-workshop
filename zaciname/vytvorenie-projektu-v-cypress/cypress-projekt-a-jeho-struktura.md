# Cypress projekt a jeho štruktúra

## Vytvorenie nového projektu

Pre vytvorenie nového Cypress projektu zadaj nasledovný príkaz:

```text
npx cypress open --project ./new-project
```

Po otvorení sa Ti otvorí GUI:

![](../../.gitbook/assets/snimka-obrazovky-2019-11-25-o-22.18.53.png)

V textovom editore môžeš vidieť, že Cypress vytvoril nový folder `new-project`, v ktorom sa nachádzajú ďalšie súbory.

![](../../.gitbook/assets/snimka-obrazovky-2019-11-25-o-22.22.28.png)

### Na čo slúžia jednotlivé súbory

|  Názov | Popis |
| :--- | :--- |
| cypress.json | Cypress settings |
| cypress/integration | test súbory |
| cypress/fixtures | mock dáta |
| cypress/plugins | Cypress pluginy |
| cypress/support | commandy, utility, defaultné akcie |



