import "./style.css";

const amountElement = document.querySelector(".form__field--amount");
const currencyElement = document.querySelector(".form__field--currency");
const resultElement = document.querySelector(".form__result");


const calculateResult = (amount, currency) => {
    const rateEUR = 4.658;
    const rateGBP = 5.1123;
    const rateUSD = 3.858;

    switch (currency) {
        case "EUR":
            return amount / rateEUR;

        case "GBP":
            return amount / rateGBP;

        case "USD":
            return amount / rateUSD;
    }
};

const Buttons = () => (
    <div>
        <button className="form__button"
            onClick={
                () => {

                    console.log("Przeliczam");
                }
            }>PRZELICZ</button>
        <button className="form__button" type="reset">RESETUJ</button>
    </div>
);

export default Buttons;