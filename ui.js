class UI {
    constructor(firstSelected, secondSelected) {
        this.firstSelected = document.querySelector(".firstCurrencyArea");
        this.secondSelected = document.querySelector(".secondCurrencyArea");
        this.resultArea = document.querySelector(".result-area");
    }
    displayFirstCurrency(text) {
        this.firstSelected.textContent = text;
    }
    displaySecondCurrency(text) {
        this.secondSelected.textContent = text;
    }
    displayResultCurrency(text) {
        this.resultArea.textContent = text
    }
    // changeFirstCurrencyArea(firstMoney) {
    //     this.firstSelected.textContent = firstMoney
    // }
    // changeSecondCurrencyArea(secondMoney) {
    //     this.secondSelected.textContent = secondMoney
    // }
}