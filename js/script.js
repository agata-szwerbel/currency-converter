let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount = +amountElement.value;
    let currency = currencyElement.value;
    let result;
    let EUR = 4.69;
    let USD = 4.45;
    let NOK = 0.47;
    let CHF = 4.55;

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
    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;

    formElement.addEventListener("reset", () => {
        resultElement.innerText = ``;
    })
});