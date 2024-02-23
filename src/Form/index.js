import "./style.css";
import React, { useState } from "react";


function Form() {
    const [amount, setAmount] = useState(0);
    const onInputChange = ({ target }) => {
        setAmount(target.value);
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log("Przeliczam");
    };

    const onFormReset = (event) => {
        event.preventDefault();
        setAmount(0); // reset input value
        console.log("Resetuję");
    };

    const rateEUR = 4.658;
    const rateGBP = 5.1123;
    const rateUSD = 3.858;

    //oblicz walutę
    function onClickCalculate() {
        const currency = document.querySelector(".js-currency").value;
        const resultElement = document.querySelector(".js-result");
        switch (currency) {
            case "EUR":
                resultElement.textContent = (amount / rateEUR).toFixed(2) + " EUR";
                break;
            case "GBP":
                resultElement.textContent = (amount / rateGBP).toFixed(2) + " GBP";
                break;
            case "USD":
                resultElement.textContent = (amount / rateUSD).toFixed(2) + " USD";
                break;
            default:
                resultElement.textContent = "B/D";
        }
    };

    return (
        <form className="form" onSubmit={onFormSubmit} onReset={onFormReset}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">
                    przelicznik walut - pola oznaczone <strong>gwiazdką</strong> są
                    obowiązkowe do wypełnienia
                </legend>
                <p>
                    <label>
                        <span className="form__labelText">* Waluta w PLN:</span>
                        <input
                            value={amount}
                            onChange={onInputChange}
                            className="form__field js-baseCurrency"
                            type="number"
                            min="0"
                            step="any"
                            required
                            placeholder="podaj dowolną kwotę w PLN"
                        />
                    </label>
                </p>
                <p>
                    <label>
                        <span className="form__labelText">* WALUTA:</span>
                        <select className="form__field js-currency" name="currencySelector">
                            <option value="EUR">Euro</option>
                            <option value="GBP">Funt brytyjski</option>
                            <option value="USD">Dolar amerykański</option>
                        </select>
                    </label>
                </p>
            </fieldset>
            <>
                <button className="form__button"
                    type="submit"
                    onClick={onClickCalculate}
                >PRZELICZ</button>
                <button className="form__button" type="reset">RESETUJ</button>
            </>
        </form>
    );
};

export default Form;