const amountArea = document.getElementById("numberInput");
const firstCurrency = document.querySelector("#firstUnit");
const secondCurrency = document.querySelector("#secondUnit");
const currency = new Currency("USD", "TRY");
const ui = new UI(firstCurrency, secondCurrency);

changeEvent();

function changeEvent() {
    amountArea.addEventListener("input", changeAmount)

    firstCurrency.onchange = function () {
        currency.changeFirstCurrency(firstCurrency.value);
        ui.displayFirstCurrency(firstCurrency.value);
    }
    secondCurrency.onchange = function () {
        currency.changeSecondCurrency(secondCurrency.value);
        ui.displaySecondCurrency(secondCurrency.value);
    }
}

function changeAmount() {
    currency.exchangeAmount(amountArea.value)
    currency.change()
        .then(result => {
            if (result === 0) {
                ui.displayResultCurrency(null)
            }
            else {
                ui.displayResultCurrency(result)
            }
        })
        .catch(err => console.log(err))
}