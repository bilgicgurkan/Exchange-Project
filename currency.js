class Currency {
    constructor(firstCurrency, secondCurrency) {
        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.url = "https://api.exchangerate.host/latest?base=";
        this.amount = null;
    }
    change() {
        return new Promise((resolve, reject) => {

            fetch(this.url + this.firstCurrency)
                .then(response => response.json())
                .then(data => {
                    const unit = data.rates[this.secondCurrency];
                    const total = this.amount * unit;
                    resolve(total);
                })
                .catch(err => reject(err));

        });
    }
    exchangeAmount(amount) {
        this.amount = amount;
    }
    changeFirstCurrency(firstValue) {
        this.firstCurrency = firstValue;
    }
    changeSecondCurrency(secondValue) {
        this.secondCurrency = secondValue;
    }
};