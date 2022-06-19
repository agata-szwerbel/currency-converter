# currency-converter
Virtual exchange
## Demo:
https://agata-szwerbel.github.io/currency-converter/
### Description:
Using this app is very simple. First, enter amount in PLN, then choose a curriencies (one of the four: EUR, GBP, CHF, NOK). Finnaly, press the button "Oblicz" to get a result (field "Wynik"). At the moment a rate is constant (on May 4).
### Prewiev:
[![Przechwytywanie-converter.png](https://i.postimg.cc/CLQ0TSFm/Przechwytywanie-converter.png)](https://postimg.cc/D8LH1V4X)
### Used technologies:
- HTML
- CSS
- JavaScript
- BEM
### Part of the code:
```javascript
switch (currency) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "NOK":
            result = amount / NOK;
            break;
        case "CHF":
            result = amount / CHF;
            break;
    }
```
