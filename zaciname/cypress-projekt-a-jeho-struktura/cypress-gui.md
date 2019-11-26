# Cypress GUI

Tri variácie príkazu na otvorenie Cypress:

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

