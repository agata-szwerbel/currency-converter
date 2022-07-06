{
    const calculateResult = (amount, currency) => {
        const EUR = 4.69;
        const USD = 4.45;
        const NOK = 0.47;
        const CHF = 4.55;

        switch (currency) {
            case "EUR":
                return amount / EUR;
            case "USD":
                return amount / USD;
            case "NOK":
                return amount / NOK;
            case "CHF":
                return amount / CHF;
        }
    }
    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerHTML = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {

        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");   
          
        const amount = +amountElement.value;
        const currency = currencyElement.value;

        let result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

        formElement.addEventListener("reset", () => {
            resultElement.innerHTML = ``;
        })
    }
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}