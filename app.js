const amountArea = document.getElementById("numberInput");
const firstCurrency = document.querySelector("#firstUnit");
const secondCurrency = document.querySelector("#secondUnit");
const rotateBtn = document.querySelector(".rotateBtn");
const currency = new Currency("TRY", "USD");
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
    // rotateBtn.addEventListener("click", changeCurrencyDisplay)
}

function changeAmount() {
    currency.exchangeAmount(amountArea.value)
    currency.change()
        .then(result => {
            if (result <= 0) {
                ui.displayResultCurrency(null)
            }
            else {
                const resultItem = Number(result.toFixed(2))
                ui.displayResultCurrency(resultItem + ` ${secondCurrency.value}`)
            }
        })
        .catch(err => console.log(err))
}

// function changeCurrencyDisplay() {
//     ui.changeFirstCurrencyArea(secondCurrency.value)
//     ui.changeSecondCurrencyArea(firstCurrency.value)
// }
